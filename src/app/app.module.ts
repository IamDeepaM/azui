import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { ContentInfoComponent } from './content-info/content-info.component';
import { SetInfoComponent } from './set-info/set-info.component';
import { RulesListComponent, ButtonViewComponent } from './rules-list/rules-list.component';
import { LoginComponent } from './login/login.component';

import { QuillModule } from 'ngx-quill';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SanitizeHtmlPipe } from './pipe/sanitize.pipe';
import { ViewRuleComponent } from './view-rule/view-rule.component';

import { DataService } from './data.service';
import { AppService } from './app.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    AddRuleComponent,
    ContentInfoComponent,
    SetInfoComponent,
    SanitizeHtmlPipe,
    RulesListComponent,
    ViewRuleComponent,
    ButtonViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    Ng2SmartTableModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    SanitizeHtmlPipe,
    DataService,
    AppService,
    AuthService
  ],
  entryComponents: [
    SetInfoComponent,
    ViewRuleComponent,
    ButtonViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
