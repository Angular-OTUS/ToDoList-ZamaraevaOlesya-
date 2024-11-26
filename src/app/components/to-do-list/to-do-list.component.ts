import {Component, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListInterface} from "../../interfaces/todo-list.interface";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ToDoListItemComponent} from "../to-do-list-item/to-do-list-item.component";
import {ButtonComponent} from "../button/button.component";

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
export class ToDoListComponent implements OnInit {
  public disabledAddButton: boolean = true

  public todoList: Array<TodoListInterface>

  public newTask: string

  public addTaskForm: FormGroup

  constructor(
    public fb: FormBuilder
  ) {
    this.newTask = ''

    this.addTaskForm = fb.group({
      task: ['', Validators.compose([Validators.required])]
    })

    this.todoList = [
      {id: 1, text: 'Выгул собаки'},
      {id: 2, text: 'Работа'},
      {id: 3, text: 'Встреча'},
    ]
  }

  ngOnInit(): void {
  }

  @HostListener('input') onMouseEnter() {
    this.disabledAddButton = !(this.addTaskForm.controls['task'].value.length >= 1);
  }

  public removeTask(id: number): void {
    this.todoList = this.todoList.filter(v => v.id !== id)
  }

  public addTask(): void {
    let taskValue = this.addTaskForm.controls['task'].value;
    const newTask: TodoListInterface = {
      id: this.todoList.length + 1,
      text: taskValue
    };
    this.todoList.push(newTask)
    this.addTaskForm.controls['task'].setValue('');
    this.disabledAddButton = true
  }
}
