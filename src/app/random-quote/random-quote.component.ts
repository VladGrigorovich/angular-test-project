import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { RandomQuoteProps } from '../shared/interfaces/random-quote-props';
import { Quote } from '../shared/interfaces/quote';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss'],
})
export class RandomQuoteComponent implements OnInit {
  public isLoadingQuote = false;
  public quote: Quote;
  public categories: string[];
  public form: FormGroup;

  constructor(private readonly quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getCategories().subscribe((c) => {
      this.categories = c;
      this.createFormGroup();
    });
  }

  createFormGroup() {
    this.form = new FormGroup({
      name: new FormControl(null),
      categories: new FormControl(null),
    });
  }

  onSubmit() {
    const value = this.form.value;
    const props: RandomQuoteProps = {
      name: value.name,
      categories: typeof value.categories === 'string' ? [value.categories] : value.categories,
    };
    this.isLoadingQuote = true;
    this.quoteService.getRandomQuote(props).subscribe((q) => {
      this.isLoadingQuote = false;
      this.quote = q;
    });
  }
}
