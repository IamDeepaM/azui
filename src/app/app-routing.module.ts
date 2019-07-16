import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { LoginComponent } from './login/login.component';

import { AuthService as AuthGuard } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/rules-list', pathMatch: 'full' },
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
    canActivate: [AuthGuard],
    data: {
      name: 'rule-setup',
      expectedRole: 'admin'
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
