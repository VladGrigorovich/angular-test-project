import { Component, ViewChild } from '@angular/core';
import { Quote } from '../shared/interfaces/quote';
import { QuoteService } from '../quote.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrls: ['./search-quote.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchQuoteComponent {
  public displayedColumns = ['id', 'categories', 'created_at'];
  public isLoadingQuotes = false;
  public query = '';
  public dataSource = new MatTableDataSource<Quote>();
  public expanded: Quote;

  @ViewChild(MatSort) set s(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(private readonly quoteService: QuoteService) {}

  onSubmit() {
    this.isLoadingQuotes = true;
    this.quoteService.searchQuotes(this.query).subscribe((r) => {
      this.dataSource.data = r.result;
      this.isLoadingQuotes = false;
    });
  }
}
