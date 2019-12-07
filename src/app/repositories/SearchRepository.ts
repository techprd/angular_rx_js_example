import {Injectable} from '@angular/core';
import * as faker from 'faker';

@Injectable({providedIn: 'root'})
export class SearchRepository {

  async search(query: string) {
    if (query == null || query.length === 0) {
      return [];
    }
    const results = new Array(10).fill(query).map(() => faker.name.findName(query));
    return new Promise<string[]>(resolve => {
      setTimeout(() => {
        resolve(results);
      }, 500);
    });
  }
}
