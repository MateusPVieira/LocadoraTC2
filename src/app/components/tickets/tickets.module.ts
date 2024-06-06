import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { BuyTicketsFormComponent } from './buy-tickets-form/buy-tickets-form.component';
import { DetailsComponent } from 'src/app/filmes/details/details.component';
import { MaterialModule } from 'src/app/core/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    BuyTicketsComponent,
    BuyTicketsFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TicketsRoutingModule,
    DetailsComponent,
    FormsModule,
    ReactiveFormsModule,
    TicketComponent
  ]
})
export class TicketsModule { }
