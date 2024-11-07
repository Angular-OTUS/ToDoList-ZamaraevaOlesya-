import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  ngOnInit() {
  }
}
