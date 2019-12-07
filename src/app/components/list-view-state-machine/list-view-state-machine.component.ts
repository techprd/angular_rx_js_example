import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchBlocStateMachine} from '../../bloc/SearchBlocStateMachine';

@Component({
  selector: 'app-list-view-state-machine',
  templateUrl: './list-view-state-machine.component.html',
  styleUrls: ['./list-view-state-machine.component.scss'],
})
export class ListViewStateMachineComponent implements OnInit, OnDestroy {

  constructor(private bloc: SearchBlocStateMachine) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.bloc.dispose();
  }

}
