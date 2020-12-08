import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { SearchQuoteComponent } from './search-quote/search-quote.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'random-quote',
    pathMatch: 'full'
  },
  {
    path: 'random-quote',
    component: RandomQuoteComponent,
  },
  {
    path: 'search-quote',
    component: SearchQuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
