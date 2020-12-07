import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quote } from './shared/interfaces/quote';
import { RandomQuoteProps } from './shared/interfaces/random-quote-props';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private readonly httpClient: HttpClient) {}

  public getRandomQuote(props: RandomQuoteProps): Observable<Quote> {
    let url = `${environment.api.chuck}/jokes/random?`;
    if (props.name && props.name.length > 0) {
      url += `name=${props.name}&`;
    }
    if (props.categories && props.categories.length > 0) {
      const categoriesQuery = props.categories.join(',');
      url += `categories=${categoriesQuery}&`;
    }
    return this.httpClient.get<Quote>(url);
  }

  public searchQuotes(query: string): Observable<Quote[]> {
    const url = `${environment.api.chuck}/jokes/search?query=${query}`;
    return this.httpClient.get<Quote[]>(url);
  }

  public getCategories(): Observable<string[]> {
    const url = `${environment.api.chuck}/jokes/categories`;
    return this.httpClient.get<string[]>(url);
  }
}
