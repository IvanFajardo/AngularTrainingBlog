import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
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
  constructor(
    private blogService: BlogService,
    private modalService: BsModalService
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
    const initialState = {
      content: this.content,
      remarks: this.remarks,
      type: this.user.userType,
    };

    this.setModal(event);
    this.bsModalRef = this.modalService.show(BlogModalComponent, {
      initialState,
    });
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
