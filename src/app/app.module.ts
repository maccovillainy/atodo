import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { TasksComponent } from './tasks/tasks.component';
import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
