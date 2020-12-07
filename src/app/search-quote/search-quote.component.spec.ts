import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuoteComponent } from './search-quote.component';

describe('SearchQuoteComponent', () => {
  let component: SearchQuoteComponent;
  let fixture: ComponentFixture<SearchQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
