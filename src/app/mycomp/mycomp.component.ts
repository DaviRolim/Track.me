
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Rx';
import 'rxjs/Rx';

import { PopService } from './../shared/pop.service';
import { Pessoa } from '../shared/ppl';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit{

  inscricao: Subscription;
  showForm: boolean = false;
  showDetail: boolean = true;
  lista: Pessoa[] = [];
  user: Pessoa;
  filtro: any = '';
  model: Pessoa = new Pessoa('', null , '', '', {'street': '', 'provincy': '', 'country': ''}) ;

  constructor(private popService: PopService) { }

  ngOnInit() {
   this.getPers();
  }


  getPers(): void {
   this.inscricao =  this.popService.getThemAll().subscribe(ppl => this.lista = ppl);
   console.log(this.lista);
  }

  addPers() {
     this.popService.addPerson(this.model);//.subscribe(pes => this.lista.push(pes)); (returning after delay updating after view)
     this.lista.push(this.model);
  }

  clearFields(){
    this.model.address.street = '';
    this.model.address.provincy = '';
    this.model.address.country = '';
     this.model.email = '';
     this.model.nome = '';
     this.model.phone = '';
     this.model.idade = null;
  }

  personClick(id: number):number {
    return id;
  }


  filterPerson() {
    if (this.lista.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.lista;
    }
    return this.lista.filter((v) => {
      if (v.nome.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  onSelect(p: Pessoa) {
    this.user = p;
  }

  mostraCadastro() {
  if (this.showDetail === true) {
    this.showDetail = !this.showDetail;
  }
    this.showForm = !this.showForm;
  }

  toggleDetail() {
  if (this.showForm === true) {
    this.showForm = !this.showForm;
  }
  if(this.showDetail === false) {
    this.showDetail = !this.showDetail;
  }
  }

  OnDestroy(){
    this.inscricao.unsubscribe();
  }

}