import { Response } from '_debugger';
import { Observer } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Pessoa } from './ppl';

@Injectable()
export class PopService {

  constructor(private http: Http) { }

  // p1: Pessoa = new Pessoa('Davi', 22, new Date(1994, 9, 27));
  // p2: Pessoa = new Pessoa('Karina', 20, new Date(1995, 0, 16));
  // p3: Pessoa = new Pessoa('Andressa', 21, new Date(1995, 10, 22));
  // p4: Pessoa = new Pessoa('Isabela', 19, new Date(1998, 4, 7));
  // p5: Pessoa = new Pessoa('Mamai', 48, new Date(1969, 7, 21));

  listOfPerson: Pessoa[] = [];
  // [this.p1, this.p2, this.p3, this.p4, this.p5];



  getThemAll(): Observable<Pessoa[]>{
    return this.http
    .get('http://localhost:9000/pessoa/')
    .map(response => response.json());
  }

  getById(id: string): Observable<Pessoa> {
    return this.http
    .get('http://localhost:9000/pessoa/' + id)
    .map(response => response.json());

  }

  addPerson(person: string): Observable<Pessoa> {
console.log(person);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});

    return this.http
    .post('http://localhost:9000/pessoa/', person, options)
    .map(res => res.json());
  }

private extractData(res: Response | any) {
  let body = res.json();
  return body.data || {};
}

private handleError (error: Response | any) {
  let errMsg: string;
  if (error) {
    const body = error.json();
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message: error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}







}






