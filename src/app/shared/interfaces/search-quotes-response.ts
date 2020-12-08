import { Quote } from './quote';

export interface SearchQuotesResponse {
  result: Quote[];
  total: number;
}
