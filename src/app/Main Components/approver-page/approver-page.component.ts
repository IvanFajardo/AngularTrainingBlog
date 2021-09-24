import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { status } from 'src/app/models/Blog';
import { Blog } from 'src/app/models/Blog';
import { User } from 'src/app/models/User';
import { BlogService } from 'src/app/Services/blog/blog.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BlogModalComponent } from 'src/app/Shared Components/blog-modal/blog-modal.component';

@Component({
  selector: 'app-approver-page',
  templateUrl: './approver-page.component.html',
  styleUrls: ['./approver-page.component.css'],
})
export class ApproverPageComponent implements OnInit {
  tableResults!: Blog[];
  filteredTableResults!: Blog[];
  user!: User;
  bsModalRef!: BsModalRef;
  blogID?: number;

  constructor(
    private blogService: BlogService,
    private modalService: BsModalService
  ) {}

  modalGroup = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
    remarks: new FormControl(),
  });

  //getters for content, remarks, and title
  get content() {
    return this.modalGroup.get('content') as FormControl;
  }

  get remarks() {
    return this.modalGroup.get('remarks') as FormControl;
  }

  get title() {
    return this.modalGroup.get('title') as FormControl;
  }

  ngOnInit(): void {
    //gets current user logged in and the blogs for display
    this.user = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.getBlog();
  }

  //Filters table based on searched title
  doSearch(event: string) {
    this.filteredTableResults = this.tableResults.filter((data) =>
      data.title.includes(event)
    );
  }

  //Calls setModal for values to display in the modal then opens the modal
  viewRow(event: number) {
    const initialState = {
      content: this.content,
      remarks: this.remarks,
      type: this.user.userType,
      title: this.title,
    };

    this.setModal(event);
    this.bsModalRef = this.modalService.show(BlogModalComponent, {
      initialState,
    });

    this.bsModalRef.content.buttonEmitter.subscribe((res: any) =>
      this.updateStatus(res)
    );
  }

  //Sets tableResults data to modalGroup for display in the modal
  setModal(id: number) {
    this.blogID = id;
    let blog: Blog | undefined;
    blog = this.tableResults.find((x) => x.id === id);
    this.modalGroup.setValue({
      content: blog?.content,
      remarks: blog?.remarks,
      title: blog?.title,
    });
  }
  //Gets the blogs from the json server
  getBlog() {
    this.blogService.getBlogs().subscribe((data) => (this.tableResults = data));
  }

  //Updates the status if Approved or not and saves the remarks to the json server
  updateStatus(buttonName: string) {
    switch (buttonName) {
      case 'approve':
      case 'reject':
        let currentBlog = this.tableResults.find(
          (data) => data.id === this.blogID
        );
        let editedBlog = {
          id: this.blogID,
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

        this.doEdit(editedBlog as Blog);
        break;
    }
  }

  //Called to edit the database
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
