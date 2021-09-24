import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.css'],
})
export class BlogModalComponent implements OnInit {
  @Output() buttonEmitter = new EventEmitter();
  @Input() title = new FormControl();
  @Input() content = new FormControl();
  @Input() remarks = new FormControl();

  @Input() type?: string;

  public modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  //Passes the name of the button for updateStatus
  emitButton(buttonName: string) {
    this.buttonEmitter.emit(buttonName);
    this.modalService.hide();
  }
  //Closes the modal
  close() {
    this.modalService.hide();
  }
}
