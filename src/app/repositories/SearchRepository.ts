import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as faker from 'faker';

@Injectable({ providedIn: 'root' })
export class SearchRepository {

  async search(query: string) {
    if (query == null || query.length === 0) {
      return await [];
    }
    const results = new Array(10).fill(query).map(() => faker.name.findName());
    return new Promise<string[]>(resolve => {
      setTimeout(() => {
        resolve(results);
      }, 300);
    });
  }
}
