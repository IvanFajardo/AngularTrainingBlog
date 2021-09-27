import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css'],
})
export class ResultTableComponent {
  searchField!: string
  constructor() { }

  @Input()
  tableResults!: Blog[];
  @Input()
  type!: string;
  @Output()
  searchEmitter: EventEmitter<string> = new EventEmitter();
  @Output()
  editEmitter: EventEmitter<number> = new EventEmitter();
  @Output()
  deleteEmitter: EventEmitter<number> = new EventEmitter();
  @Output()
  createEmitter: EventEmitter<any> = new EventEmitter();



  //emits a search event on input
  emitSearch() {
    this.searchEmitter.emit(this.searchField)
  }

  //emits a create event on create button click
  emitCreate() {
    this.createEmitter.emit()
  }

  //emits a delete event on delete button click
  //id:number = id of blog row
  emitDelete(id: number):void {
    this.deleteEmitter.emit(id)
  }

  //emits an edit event on edit button click
  //id:number = id of blog row
  emitEdit(id:number):void {
    this.editEmitter.emit(id)
  }
}
