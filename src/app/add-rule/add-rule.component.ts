import { Component, OnInit } from '@angular/core';
import { RuleModel } from './rule.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewRuleComponent } from '../view-rule/view-rule.component';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.scss']
})
export class AddRuleComponent implements OnInit {

  rule: RuleModel;
  isContent: boolean;

  constructor(private ngms: NgbModal) { }

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

  onSave() {
    const vm = this;
  }

  onView() {
    const vm = this;
    const modalRef = this.ngms.open(ViewRuleComponent, { size: 'lg' });
    modalRef.componentInstance.rule = vm.rule;
  }
}
