import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchRepository} from '../../repositories/SearchRepository';
import {SearchBloc} from '../../bloc/SearchBloc';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, OnDestroy {
  bloc: SearchBloc;

  constructor(private repository: SearchRepository) {
    this.bloc = new SearchBloc(this.repository);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.bloc.dispose();
  }
}
