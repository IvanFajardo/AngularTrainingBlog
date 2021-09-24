import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-approver-page',
  templateUrl: './approver-page.component.html',
  styleUrls: ['./approver-page.component.css'],
})
export class ApproverPageComponent implements OnInit {
  tableResults: Blog[] = [];
  constructor() {}

  ngOnInit(): void {}

  doSearch(event: string) {}

  viewRow(event: number) {}

  setModal(id: number) {}

  getBlog() {}

  updateStatus(buttonName: string) {}
}
