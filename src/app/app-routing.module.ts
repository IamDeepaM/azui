import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { RulesListComponent } from './rules-list/rules-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/rule-setup', pathMatch: 'full' },
  {
    path: 'rule-setup',
    component: AddRuleComponent,
    data: {
      name: 'rule-setup'
    }
  }, {
    path: 'rules-list',
    component: RulesListComponent,
    data: {
      name: 'rules-list'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
