import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../../Task';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //Added the !mark after "task" to tell the compiler
  //that this value will be assigned at runtime.
  @Input() task!: Task;
  constructor() {
    //I tried to fix the problem: "Property '…' 
    //has no initializer and is not definitely assigned in the constructor"
    //this.task = new TaskItemComponent;
  }

  ngOnInit(): void {
  }

}
