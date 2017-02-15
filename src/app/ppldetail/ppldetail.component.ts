import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Pessoa } from './../shared/ppl';
import { PopService } from './../shared/pop.service';

@Component({
  selector: 'app-ppldetail',
  templateUrl: './ppldetail.component.html',
  styleUrls: ['./ppldetail.component.css']
})

export class PpldetailComponent implements OnInit, OnDestroy {
  id: string;
  user: any;
  inscricao: Subscription;

  constructor(private popService: PopService, private route: ActivatedRoute) { 
  console.log(this.route);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    this.getUser(this.id);
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


  getUser(id: string): void {
    this.popService.getById(id).subscribe(u => this.user = u);
  }

}
