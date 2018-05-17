import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import {
  AppComponent
} from './app.component';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  SampleComponent
} from './components/sample/sample.component';
import { SampleTwoComponent } from './components/sample-two/sample-two.component';
import { BlkHrsComponent } from './components/blk-hrs/blk-hrs.component';
import { WidgetComponent } from './components/blk-hrs/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SampleTwoComponent,
    BlkHrsComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
