import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Router from './resources/routes'

const routes: Routes = Router.router.all();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
