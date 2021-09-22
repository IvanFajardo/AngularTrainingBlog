import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/Services/blog/blog.service';
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

  ngOnInit(): void {
    //subscribe to blogs
    this.getBlog();
  }

  //triggers on search event and filters results to pass to results-table component
  //str: string = user input
  doSearch(str: string) {
    this.filteredTableResults = this.tableResults.filter((data) => data.title.includes(str));
  }

  //triggers on delete event and deletes chosen blog
  //id:number = id of blog row
  deleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe((data) => {
      this.tableResults = this.tableResults.filter((result) => result.id !== id);
    });
    //delete
  }

  //triggers on edit event and shows blog-modal for editing
  //id:number = id of blog row
  editBlog(id: number) {
    //show modal
  }

  //triggers on create event and shows blog-modal for creation
  createBlog() {
    //create
  }

  //sets the row values from results to the modalgroup
  setModal(id: number) {
    //setModal
  }

  //gets the blog array from db.json to tableResults
  getBlog() {
    //get blog
    this.blogService.getBlogs().subscribe((data) => (this.tableResults = data));
  }

  //saves the data from modalGroup to DB. Set status based on buttonName
  updateStatus(buttonName: string) {
    //update
  }
}
