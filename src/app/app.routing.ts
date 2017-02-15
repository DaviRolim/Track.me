import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { PpldetailComponent } from './ppldetail/ppldetail.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'pessoas', component: MycompComponent },
	{ path: 'pessoas/:id', component: PpldetailComponent },
	{ path: 'tasks', component: TodoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);