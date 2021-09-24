import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { User } from 'src/app/models/User';
import { BlogService } from 'src/app/Services/blog/blog.service';

@Component({
  selector: 'app-approver-page',
  templateUrl: './approver-page.component.html',
  styleUrls: ['./approver-page.component.css'],
})
export class ApproverPageComponent implements OnInit {
  tableResults!: Blog[];
  filteredTableResults!: Blog[];
  user!: User;
  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.getBlog();
  }

  doSearch(event: string) {}

  viewRow(event: number) {}

  setModal(id: number) {}

  getBlog() {}

  updateStatus(buttonName: string) {}
}
