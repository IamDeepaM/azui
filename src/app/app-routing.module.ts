import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/rule-setup', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      name: 'login'
    }
  },
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
