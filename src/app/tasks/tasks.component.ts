import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks;
  t;
  constructor() {
  }

  ngOnInit() {
    this.t = this.tasks ? this.tasks.tasks : [];
  }

}
