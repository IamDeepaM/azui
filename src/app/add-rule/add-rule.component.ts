import { Component, OnInit } from '@angular/core';
import { RuleModel } from './rule.model';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.scss']
})
export class AddRuleComponent implements OnInit {

  rule: RuleModel;
  isContent: boolean;

  constructor() { }

  ngOnInit() {
    const vm = this;
    vm.clearFields();
  }

  clearFields() {
    const vm = this;
    vm.rule = new RuleModel();
    vm.isContent = true;
  }

  onSetInfo() {
    const vm = this;
    vm.isContent = false;
  }

  onSetContent() {
    const vm = this;
    vm.isContent = true;
  }
}
