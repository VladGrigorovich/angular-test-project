import { Quote } from './quote';

export interface SearchQuoteResponse {
  result: Quote[];
  total: number;
}
