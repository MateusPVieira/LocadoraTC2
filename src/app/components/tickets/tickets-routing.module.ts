import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';

const routes: Routes = [
  { path: '', component: BuyTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
