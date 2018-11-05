import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AddRuleComponent } from './add-rule/add-rule.component';

import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    AddRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
