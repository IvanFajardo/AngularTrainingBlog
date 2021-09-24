import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
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
  @Input() type?: string = 'Approver';

  public modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  emitButton(buttonName: string) {
    console.log(this.content.value);
    console.log(this.remarks.value);
    console.log(this.title.value);
    console.log(buttonName);
    this.buttonEmitter.emit(buttonName);
    this.close()
  }

  close() {
    this.modalService.hide();
  }
}
