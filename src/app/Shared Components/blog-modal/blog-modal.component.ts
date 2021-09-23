import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.css'],
})
export class BlogModalComponent implements OnInit {
  @Output() buttonEmitter = new EventEmitter();
  @Input() content?: FormControl;
  @Input() remarks?: FormControl;
  @Input() title?: string;
  @Input() type?: string;

  blogForm: any;
  public modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.blogForm = this.formBuilder.group({
      content: [''],
      remarks: [''],
    });
  }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  emitButton(buttonName: string) {
    console.log(buttonName);
    this.buttonEmitter.emit(buttonName);
  }

  close() {
    this.modalRef?.hide();
  }
}
