import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { PpldetailComponent } from './ppldetail/ppldetail.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { PopService } from './shared/pop.service';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    PpldetailComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PopService, {
    provide: LOCALE_ID,
    useValue: 'pt-BR' 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
