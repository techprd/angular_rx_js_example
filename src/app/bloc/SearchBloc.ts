import {SearchRepository} from '../repositories/SearchRepository';
import {BehaviorSubject, Observable, Observer, from as observableFrom} from 'rxjs';
import {switchMap, withLatestFrom} from 'rxjs/operators';

export class SearchBloc {
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
        switchMap((query) => {
          return observableFrom(this.repository.search(query));
        })
      );
    this.preamble$ = this.results$.pipe(
      withLatestFrom(this.query$, (_, q) => q ? `Results for ${q}` : '')
    );
  }

  dispose() {
    this.query$.complete();
  }
}

declare interface SearchState {
  loading: boolean;
  done: boolean;
  getValues();
}
