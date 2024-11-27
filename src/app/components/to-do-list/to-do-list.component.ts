import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListInterface} from "../../interfaces/todo-list.interface";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ToDoListItemComponent} from "../to-do-list-item/to-do-list-item.component";
import {ButtonComponent} from "../button/button.component";
import {TaskFormInterface} from "../../interfaces/task-form.interface";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ToDoListItemComponent,
    ButtonComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  public disabledAddButton: boolean = true

  public todoList: Array<TodoListInterface>

  public newTask: string

  public addTaskForm: FormGroup & TaskFormInterface

  constructor(
    public fb: FormBuilder
  ) {
    this.newTask = ''

    this.addTaskForm = this.fb.group({
      task: this.fb.control('', Validators.required)
    }) as FormGroup & TaskFormInterface;

    this.todoList  = [
      {id: 1, text: 'Выгул собаки'},
      {id: 2, text: 'Работа'},
      {id: 3, text: 'Встреча'},
    ]
  }

  @HostListener('input') onMouseEnter() {
    this.disabledAddButton = !(this.addTaskForm.controls['task'].value.length >= 1);
  }

  public removeTask(id: number): void {
    this.todoList = this.todoList.filter(v => v.id !== id)
  }

  public addTask(): void {
    const newTask: TodoListInterface = {
      id: this.todoList.length + 1,
      text: this.addTaskForm.controls['task'].value
    };
    this.todoList.push(newTask)
    this.addTaskForm.controls['task'].setValue('');
    this.disabledAddButton = true
  }
}
