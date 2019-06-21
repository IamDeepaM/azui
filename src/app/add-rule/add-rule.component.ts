import { Component, OnInit } from '@angular/core';
import { RuleModel } from './rule.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewRuleComponent } from '../view-rule/view-rule.component';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.scss']
})
export class AddRuleComponent implements OnInit {

  rule: RuleModel;
  isContent: boolean;

  constructor(private ngms: NgbModal,
    private ds: DataService,
    private toastr: ToastrService) { }

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
    if (vm.rule.content && vm.rule.group && vm.rule.no && vm.rule.title) {
      vm.ds.postData('/rules/add', vm.rule).subscribe(res => {
        if (res && !res.error) {
          vm.toastr.success('rule added succesfully');
          vm.clearFields();
        }
      });
    } else {
      vm.toastr.error('please fill all the fields');
    }
  }

  onView() {
    const vm = this;
    const modalRef = this.ngms.open(ViewRuleComponent, { size: 'lg', windowClass: 'app-modal-window' });
    modalRef.componentInstance.rule = vm.rule;
  }
}
