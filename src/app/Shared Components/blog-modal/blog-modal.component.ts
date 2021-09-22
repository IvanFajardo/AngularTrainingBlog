import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.css'],
})
export class BlogModalComponent implements OnInit {
  public modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  emitButton() {}

  close() {}
}
