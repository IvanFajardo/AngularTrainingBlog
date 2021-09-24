import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { User } from 'src/app/models/User';
import { BlogService } from 'src/app/Services/blog/blog.service';
import { status } from 'src/app/models/Blog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BlogModalComponent } from 'src/app/Shared Components/blog-modal/blog-modal.component';
@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent implements OnInit {
  bsModalRef!: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private modalService: BsModalService
  ) {}
  modalGroup = this.fb.group({
    content: [''],
    remarks: [''],
  });

  tableResults!: Blog[];
  filteredTableResults!: Blog[];
  user!: User;
  currentBlogID: number = -1;

  ngOnInit(): void {
    //subscribe to blogs
    this.user = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.getBlog();
  }

  //triggers on search event and filters results to pass to results-table component
  //str: string = user input
  doSearch(str: string) {
    this.filteredTableResults = this.tableResults.filter((data) =>
      data.title.includes(str)
    );
  }

  //triggers on delete event and deletes chosen blog
  //id:number = id of blog row
  deleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe((data) => {
      this.tableResults = this.tableResults.filter(
        (result) => result.id !== id
      );
    });
  }

  //triggers on edit event and shows blog-modal for editing
  //id:number = id of blog row
  editBlog(id: number) {
    this.setModal(id);
    this.showModal(id);
  }

  //triggers on create event and shows blog-modal for creation
  createBlog() {
    this.modalGroup.reset();
    this.showModal();
  }

  //sets the row values from results to the modalgroup
  setModal(id: number) {
    let blog = this.tableResults.find((result) => result.id === id);
    this.modalGroup.setValue({
      content: blog?.content,
      remarks: blog?.remarks || '',
    });
  }

  //gets the blog array from db.json to tableResults
  getBlog() {
    this.blogService.getBlogs().subscribe((data) => (this.tableResults = data));
  }

  //saves the data from modalGroup to DB. Set status based on buttonName
  updateStatus(buttonName: string) {
    switch (buttonName) {
      case 'draft':
      case 'submit':
        if (this.currentBlogID === -1) {
          let newBlog = {
            id: this.generateID(),
            title: '',
            content: this.modalGroup.get('content')?.value,
            datePosted: new Date(),
            status: (buttonName === 'draft'
              ? 'Draft'
              : 'For Approval') as status,
            author: this.user.username,
          };

          this.blogService
            .addBlog(newBlog)
            .subscribe(
              (data) => (this.tableResults = [...this.tableResults, newBlog])
            );
        } else {

          let currentBlog = this.tableResults.find(
            (data) => data.id === this.currentBlogID
          );
          
          let blog = {
            id: this.currentBlogID,
            title: currentBlog?.title,
            content: this.modalGroup.get('content')?.value,
            datePosted: currentBlog?.datePosted,
            author: currentBlog?.author,
            status: (buttonName === 'draft'
              ? 'Draft'
              : 'For Approval') as status,
          };

          this.doEdit(blog as Blog);
        }
        break;

      case 'approve':
      case 'reject':
        let currentBlog = this.tableResults.find(
          (data) => data.id === this.currentBlogID
        );
        let blog = {
          id: this.currentBlogID,
          title: currentBlog?.title,
          content: currentBlog?.content,
          datePosted: currentBlog?.datePosted,
          dateProcessed: new Date(),
          remarks: this.modalGroup.get('remarks')?.value,
          author: currentBlog?.author,
          approver: this.user.username,
          status: (buttonName === 'approve'
            ? 'Approved'
            : 'Rejected') as status,
        };

        this.doEdit(blog as Blog);
        break;
    }
    //update
  }

  generateID(): number {
    return this.tableResults.reduce((a, b) => (a.id > b.id ? a : b)).id + 1;
  }

  showModal(id?: number) {
    if (id) this.currentBlogID = id;
    const initialState = {
      content: this.modalGroup.get('content') as FormControl,
      remarks: this.modalGroup.get('remarks') as FormControl,
      title: 'test',
      type: this.user.userType,
    };
    this.bsModalRef = this.modalService.show(BlogModalComponent, {
      initialState,
    });
    //show modal
    this.bsModalRef.content.buttonEmitter.subscribe((res: any) =>
      this.updateStatus(res)
    );

    this.bsModalRef.onHidden?.subscribe(
      (res: any) => (this.currentBlogID = -1)
    );
  }

  doEdit(blog: Blog) {
    this.blogService.editBlog(blog as Blog).subscribe((data) => {
      this.tableResults = this.tableResults.map((b) => {
        if (b.id === blog!.id) {
          b = Object.assign({}, b, blog);
        }
        return b;
      });
    });
  }
}
