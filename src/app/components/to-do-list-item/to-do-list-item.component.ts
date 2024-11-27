import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListInterface} from "../../interfaces/todo-list.interface";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
@Input() todoList: Array<TodoListInterface> = []
@Output('removeTask') removeTask:EventEmitter<number> = new EventEmitter<number>();

  public isLoading: boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }

  public removeTasks(id: number) {
    this.removeTask.emit(id)
  }
}
