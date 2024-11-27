import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListInterface} from "../../interfaces/todo-list.interface";

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
@Input() todoList: Array<TodoListInterface> = []
@Output('removeTask') removeTask:EventEmitter<number> = new EventEmitter<number>();

public removeTasks(id: number) {
  this.removeTask.emit(id)
}
}
