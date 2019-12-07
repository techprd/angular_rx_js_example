import {Component, OnInit} from '@angular/core';
import {SearchBloc} from '../../bloc/SearchBloc';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor(private bloc: SearchBloc) {
  }

  ngOnInit() {
  }

}
