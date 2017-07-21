import {data} from './data';

export class DataService {
  data;
  constructor() {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  addBoard(name: string) {
    this.data.boards.push({
      id: this.data.id+=1,
      name
    })
  }
  removeBoard(id: number) {
     this.data.boards = this.data.boards.filter(board => board.id !== id);
  }
}
