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
      name: new FormControl(''),
      category: new FormControl(''),
    });
  }

  onSubmit() {
    const value = this.form.value;
    const props: RandomQuoteProps = {};
    if (value.name.trim().length > 0) {
      props.name = value.name;
    }
    if (value.category) {
      props.categories = [value.category];
    }
    this.isLoadingQuote = true;
    this.quoteService.getRandomQuote(props).subscribe((q) => {
      this.isLoadingQuote = false;
      this.quote = q;
    });
  }
}
