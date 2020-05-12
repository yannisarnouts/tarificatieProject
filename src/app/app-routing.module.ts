import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RenteToolComponent} from './components/rente-tool/rente-tool.component';


const routes: Routes = [
  {path: 'calculate', component: RenteToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
