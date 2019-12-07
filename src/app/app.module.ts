import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListViewRxComponent} from './components/list-view-rx/list-view-rx.component';
import {MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import {ListViewComponent} from './components/list-view/list-view.component';
import {ListViewStateMachineComponent} from './components/list-view-state-machine/list-view-state-machine.component';
import {SearchRepository} from './repositories/SearchRepository';

@NgModule({
  declarations: [
    AppComponent,
    ListViewRxComponent,
    ListViewComponent,
    ListViewStateMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule, MatInputModule, A11yModule, MatToolbarModule, MatButtonModule, MatProgressSpinnerModule
  ],
  providers: [SearchRepository],
  bootstrap: [AppComponent]
})
export class AppModule {
}
