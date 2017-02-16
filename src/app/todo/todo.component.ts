import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { PopService } from './../shared/pop.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  done = {'backgroundColor': 'green',
             'color': 'white'};
  ongoing = {'backgroundColor': 'dimgrey',
             'color': 'white'};
  planning = {'backgroundColor': 'darkred',
             'color': 'white'};


  user: any;
  inscricao: Subscription;
  tasks: any[] = [];
  taskBydate: string[] = [];

  constructor(private popService: PopService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getUser('1');

  }

  getUser(id: string): any {
    this.popService.getById(id).subscribe(res => this.user = res);
   this.popService.getById(id).subscribe(res => console.log(res.tasks));
    this.popService.getById(id).subscribe(res => {
      this.tasks = res.tasks;
    });
  }

  // ngOnChanges(changes) {
  //   this.getUser('1');
  //   this.cdRef.detectChanges();
  // }



}
