import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AddRuleComponent } from './add-rule/add-rule.component';

import { QuillModule } from 'ngx-quill';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToastrModule } from 'ngx-toastr';
import { ContentInfoComponent } from './content-info/content-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    AddRuleComponent,
    ContentInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    Ng2SmartTableModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
