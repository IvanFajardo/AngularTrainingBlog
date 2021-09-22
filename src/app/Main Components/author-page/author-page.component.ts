import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
})
export class AuthorPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  modalGroup = this.fb.group({
    content: [''],
    remarks: ['']
  })

  ngOnInit(): void {
    //subscribe to blogs
  }

  //triggers on search event and filters results to pass to results-table component
  //str: string = user input
  doSearch(str: string) {
    //filter blogs
  }

  //triggers on delete event and deletes chosen blog
  //id:number = id of blog row
  deleteBlog(id: number) {
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
  setModal(id:number) {
    //setModal
  }

  //gets the blog array from db.json to tableResults
  getBlog() {
    //get blog
  }

  //saves the data from modalGroup to DB. Set status based on buttonName
  updateStatus(buttonName:string) {
    //update
  }
}
