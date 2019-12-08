import {SearchRepository} from '../repositories/SearchRepository';
import {Observable, Observer, Subject} from 'rxjs';
import {debounceTime, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBlocStateMachine {
  private readonly results$ = new Subject<string[]>();

  get results(): Observable<string[]> {
    return this.results$;
  }

  private readonly preamble$: Observable<string>;

  get preamble(): Observable<string> {
    return this.preamble$;
  }

  private query$ = new Subject<string>();

  get query(): Observer<string> {
    return this.query$;
  }

  private isLoading$ = new Subject<boolean>();

  get isLoading(): Observable<boolean> {
    return this.isLoading$;
  }

  constructor(private repository: SearchRepository) {
    this.query$.subscribe((q) => this.performNameSearch(q));
    // this.query$.pipe(debounceTime(300)).subscribe((q) => this.performNameSearch(q));
    this.preamble$ = this.results$.pipe(
      withLatestFrom(this.query$, (_, q) => q ? `Results for ${q}` : '')
    );
  }

  async performNameSearch(query: string) {
    for await (const state of this.getState(query)) {

      if (state instanceof SearchInitial) {
        console.log('init...');
        this.results$.next(state.data);
        this.isLoading$.next(false);

      } else if (state instanceof SearchLoading) {
        console.log('searching...');
        this.isLoading$.next(true);

      } else if (state instanceof SearchResult) {
        console.log('got results...');
        this.results$.next(state.data);
        this.isLoading$.next(false);

      } else if (state instanceof SearchError) {
        console.error('an error occurred...');
      }
    }
  }

  async* getState(query: string) {
    if (query) {
      yield new SearchLoading();
      try {
        const data = await this.repository.search(query);
        yield new SearchResult(data);
      } catch (e) {
        yield new SearchError();
      }
    } else {
      yield new SearchInitial();
    }
  }

  dispose() {
    this.query$.complete();
    this.isLoading$.complete();
  }
}

interface SearchState {
  readonly data: string[];
}

class SearchInitial implements SearchState {
  get data() {
    return undefined;
  }
}

class SearchError implements SearchState {
  get data() {
    return ['Error...'];
  }
}

class SearchLoading implements SearchState {
  get data() {
    return undefined;
  }
}

class SearchResult implements SearchState {
  readonly $data: string[];

  constructor(data: string[]) {
    this.$data = data;
  }

  get data() {
    return this.$data;
  }
}






