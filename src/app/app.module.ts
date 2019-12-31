import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phones/phone-list/phone-list.component';
import { PhoneViewComponent } from './phones/phone-view/phone-view.component';
import { PhoneDetailsComponent } from './phones/phone-details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneViewComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
