import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //subscribe to blogs
  }

  //triggers on search event and filters results to pass to results-table component
  //str: string = user input
  doSearch(str: string) {
    //filter blogs
  }

  //triggers on edit event and shows blog-modal for editing
  //id:number = id of blog row
  editBlog(id: number) {
    //show modal
  }

  //triggers on delete event and deletes chosen blog
  //id:number = id of blog row
  deleteBlog(id: number) {
    //delete
  }

  //triggers on create event and shows blog-modal for creation
  createBlog() {
    //create
  }
}
