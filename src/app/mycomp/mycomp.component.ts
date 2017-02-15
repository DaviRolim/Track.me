import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PopService } from './../shared/pop.service';
import { Pessoa } from '../shared/ppl';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit, OnChanges {

  lista: Pessoa[] = [];
  user: Pessoa;
  filtro: any = '';



  constructor(private popService: PopService) { }

  ngOnInit() {
   this.getPers();
  }

  getPers(): void {
    this.popService.getThemAll().subscribe(ppl => this.lista = ppl);
    this.popService.getThemAll().subscribe(val => console.log(val));
  }

  addPers() {
  console.log('addPers');
    const pessoa: any = {
// Tirar esses any e fazer um retorno de um MEMBER (CRIAR MEMBER)
  'id': '13',
  'phone': '(83) 98831-0001',
  'idade': '40',
  'nome': 'Lucien',
  'email': 'luciliu@hotmail.com',
  'address': {'street': 'R Antonio Correia de matos', 'country': 'Brasil', 'provincy': 'Paraíba'}
  };
    this.popService.addPerson(pessoa).subscribe(pes => this.lista.push(pes));
    this.getPers();
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

  onSelect(p: any){
    this.user = p;
  }

  ngOnChanges() {
    console.log('opa');
    this.getPers();
  }
 }


