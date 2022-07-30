import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listTask:any;
  ngOnInit(): void {
    this.listTask = this.d.getTask().subscribe(data => this.listTask = data);
  }
}
