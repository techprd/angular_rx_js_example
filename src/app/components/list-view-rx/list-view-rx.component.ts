import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchBlocRx} from '../../bloc/SearchBlocRx';

@Component({
  selector: 'app-list-view-rx',
  templateUrl: './list-view-rx.component.html',
  styleUrls: ['./list-view-rx.component.scss'],
})
export class ListViewRxComponent implements OnInit, OnDestroy {

  constructor(private bloc: SearchBlocRx) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.bloc.dispose();
  }
}
