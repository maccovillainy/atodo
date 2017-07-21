import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  data;
  newBoard: string;
  constructor(private dataService: DataService) {
    this.data = dataService.getData();
  }

  ngOnInit() {
  }
  addBoard() {
    this.dataService.addBoard(this.newBoard);
    this.newBoard = '';
  }
  removeBoard(id){
    this.dataService.removeBoard(id)
  }
}
