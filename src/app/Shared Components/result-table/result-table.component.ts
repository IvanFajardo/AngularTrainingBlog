import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent {

  constructor() { }

  @Input()
  tableResults!: Blog[]
  @Input()
  type!: string
  @Output()
  searchEmitter: EventEmitter<string> = new EventEmitter
  @Output()
  editEmitter: EventEmitter<number> = new EventEmitter
  @Output()
  deleteEmitter: EventEmitter<number> = new EventEmitter
  @Output()
  createEmitter: EventEmitter<any> = new EventEmitter

  searchField!: string

  isDraftisApprover(str: string) {
    if(this.type!=='Approver')
      return false
    return str==='Draft'
  }

  //emits a search event on input
  emitSearch() {
    this.searchEmitter.emit(this.searchField)
    console.log(this.searchField);
  }

  //emits a create event on create button click
  emitCreate() {
    this.createEmitter.emit()
    console.log('create');
  }

  //emits a delete event on delete button click
  //id:number = id of blog row
  emitDelete(id: number):void {
    this.deleteEmitter.emit(id)
    console.log('delete');
  }

  //emits an edit event on edit button click
  //id:number = id of blog row
  emitEdit(id:number):void {
    this.editEmitter.emit(id)
    console.log('edit');
  }

}
