import { Component, ViewChild } from '@angular/core';
import { Quote } from '../shared/interfaces/quote';
import { QuoteService } from '../quote.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { state, style, transition, trigger, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrls: ['./search-quote.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed, void => expanded',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
})
export class SearchQuoteComponent {
  public form = new FormGroup({
    query: new FormControl(null, Validators.required),
  });
  public displayedColumns = ['id', 'categories', 'created_at'];
  public isLoadingQuotes = false;
  public dataSource = new MatTableDataSource<Quote>();
  public expandedQuote: Quote;

  @ViewChild(MatSort) set sort(s: MatSort) {
    this.dataSource.sort = s;
  }

  constructor(private readonly quoteService: QuoteService) {}

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoadingQuotes = true;
    this.quoteService.searchQuotes(this.form.get('query').value).subscribe(
      (r) => {
        this.dataSource.data = r.result;
        this.isLoadingQuotes = false;
      },
      (e) => {
        console.error(e);
      },
    );
  }
}
