import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchQuoteComponent } from './search-quote/search-quote.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, SearchQuoteComponent, RandomQuoteComponent, QuoteComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
