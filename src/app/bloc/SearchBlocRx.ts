import {SearchRepository} from '../repositories/SearchRepository';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {debounceTime, delay, switchMap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBlocRx {
  private readonly results$: Observable<string[]>;

  get results(): Observable<string[]> {
    return this.results$;
  }

  private readonly preamble$: Observable<string>;

  get preamble(): Observable<string> {
    return this.preamble$;
  }

  private query$ = new BehaviorSubject<string>('');

  get query(): Observer<string> {
    return this.query$;
  }

  constructor(private repository: SearchRepository) {
    this.results$ = this.query$
      .pipe(
        debounceTime(300),
        switchMap((query) => this.repository.search(query)),
      );

    this.preamble$ = this.results$.pipe(
      withLatestFrom(this.query$, (_, q) => q ? `Results for ${q}` : '')
    );
  }

  dispose() {
  }
}
