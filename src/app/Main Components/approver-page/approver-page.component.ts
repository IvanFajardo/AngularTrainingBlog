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

  modalGroup = new FormGroup({
    content: new FormControl(),
    remarks: new FormControl(),
  });

  get content() {
    return this.modalGroup.get('content') as FormControl;
  }

  get remarks() {
    return this.modalGroup.get('remarks') as FormControl;
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.getBlog();
  }

  doSearch(event: string) {
    this.filteredTableResults = this.tableResults.filter((data) =>
      data.title.includes(event)
    );
  }

  viewRow(event: number) {
    this.setModal(event);
  }

  setModal(id: number) {
    let blog: Blog | undefined;
    blog = this.tableResults.find((x) => x.id === id);
    this.modalGroup.setValue({
      content: blog?.content,
      remarks: blog?.remarks,
    });
  }

  getBlog() {
    this.blogService.getBlogs().subscribe((data) => (this.tableResults = data));
  }

  updateStatus(buttonName: string) {}
}
