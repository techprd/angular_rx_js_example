import {SearchRepository} from '../repositories/SearchRepository';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBloc {
  private query = '';
  results: string[] = [];

  get preamble() {
    return this.query == null || this.query.length === 0 ? '' : `Results for ${this.query}`;
  }

  constructor(private repository: SearchRepository) {
  }

  async executeSearch(query: string) {
    this.query = query;
    this.results = await this.repository.search(query);
  }
}

