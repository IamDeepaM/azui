import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { ViewCell } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewRuleComponent } from '../view-rule/view-rule.component';

@Component({
  selector: 'app-button-view',
  // tslint:disable-next-line:max-line-length
  template: '<button (click)="onView()" class="btn btn-info pointer">View</button>'
})
export class ButtonViewComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private ngms: NgbModal) { }

  ngOnInit() { }

  onView() {
    const vm = this;
    const modalRef = this.ngms.open(ViewRuleComponent, { size: 'lg', windowClass: 'app-modal-window' });
    modalRef.componentInstance.rule = vm.rowData;
  }
}

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss']
})
export class RulesListComponent implements OnInit {

  public rules: any;
  settings = {
    pager: {
      display: true,
      perPage: 10
    },
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
    columns: {
      title: {
        title: 'Title'
      },
      no: {
        title: 'Rule No'
      },
      group: {
        title: 'Group'
      },
      button: {
        title: '',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) { }
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };

  constructor(private ds: DataService,
    private toastr: ToastrService) { }

  ngOnInit() {
    const vm = this;
    vm.getRules();
  }

  getRules() {
    const vm = this;
    vm.ds.getData('/rules/').subscribe(res => {
      if (res && !res.error) {
        vm.rules = res.data;
        console.log(vm.rules);
      } else {
        vm.toastr.error('Unabale to get rules, try again!!!');
      }
    });
  }

}
