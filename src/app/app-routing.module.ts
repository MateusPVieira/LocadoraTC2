import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path:'home', loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule)},
  {path:'buyTicket', loadChildren: () => import('./components/tickets/tickets.module').then(m => m.TicketsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
