import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  emitButton(buttonName: string) {
    this.buttonEmitter.emit(buttonName);
    this.close()
  }
  //Closes the modal
  close() {
    this.modalService.hide();
  }
}
