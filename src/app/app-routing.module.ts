import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListViewRxComponent} from './components/list-view-rx/list-view-rx.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {ListViewStateMachineComponent} from './components/list-view-state-machine/list-view-state-machine.component';

const routes: Routes = [
  {path: '', component: ListViewComponent},
  {path: 'rx', component: ListViewRxComponent},
  {path: 'state', component: ListViewStateMachineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
