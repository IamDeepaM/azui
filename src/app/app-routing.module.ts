import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { AddRuleComponent } from './add-rule/add-rule.component';

const routes: Routes = [
  { path: '', redirectTo: '/rule-setup', pathMatch: 'full' },
  {
    path: 'add-content',
    component: AddContentComponent
  }, {
    path: 'rule-setup',
    component: AddRuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
