import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { User } from 'src/app/models/User';
import { BlogService } from 'src/app/Services/blog/blog.service';
import { status } from 'src/app/models/Blog';
@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private blogService: BlogService) {}

  modalGroup = this.fb.group({
    content: [''],
    remarks: [''],
  });

  tableResults!: Blog[];
  filteredTableResults!: Blog[];
  user!: User;

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
    console.log(this.modalGroup);
    //show modal
  }

  //triggers on create event and shows blog-modal for creation
  createBlog() {
    //create
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
        let newBlog = {
          id: 1,
          title: '',
          content: this.modalGroup.get('content')?.value,
          datePosted: new Date(),
          status: 'Draft' as status,
          author: this.user.username,
        };
        this.blogService
          .addBlog(newBlog)
          .subscribe(
            data => this.tableResults = [...this.tableResults, newBlog]
          );
        break;

      case 'submit':
        //id
        break;

      case 'approve':
        //id
        break;

      case 'reject':
        //id
        break;
    }
    //update
  }
}
