import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { ViewCell } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewRuleComponent } from '../view-rule/view-rule.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-button-view',
  // tslint:disable-next-line:max-line-length
  template: '<div class="flx-row flx-jsa" title="View"><button (click)="onView()" class="btn btn-info"><div class="icon-sm icon-eye"></div></button><button *ngIf="!rowData.active && isAdmin" (click)="onActive()" class="btn btn-success pointer" title="Active"><div class="icon-sm icon-tick"></div></button><button *ngIf="rowData.active && isAdmin" (click)="onInActive()" class="btn btn-danger pointer" title="In-Active"><div class="icon-sm icon-cross"></div></button></div>'
})
export class ButtonViewComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;
  isAdmin: boolean;

  constructor(private ngms: NgbModal,
    private ds: DataService,
    private toastr: ToastrService,
    private appService: AppService) { }

  ngOnInit() {
    const vm = this;
    vm.isAdmin = vm.appService.userObj && vm.appService.userObj.isAdmin;
  }

  onView() {
    const vm = this;
    const modalRef = this.ngms.open(ViewRuleComponent, { size: 'lg', windowClass: 'app-modal-window' });
    modalRef.componentInstance.rule = vm.rowData;
  }

  onActive() {
    const vm = this;
    vm.onStatusChange(true);
  }

  onInActive() {
    const vm = this;
    vm.onStatusChange(false);
  }

  onStatusChange(status) {
    const vm = this;
    vm.rowData.active = status;
    vm.ds.postData('/rules/update', vm.rowData).subscribe(res => {
      if (res && !res.error) {
        vm.toastr.success('rule updated succesfully');
      }
    });
  }
}

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss']
})
export class RulesListComponent implements OnInit {

  private isAdmin: boolean;
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
      ruleno: {
        title: 'Rule No'
      },
      group: {
        title: 'Group'
      },
      button: {
        title: '',
        type: 'custom',
        filter: false,
        width: '130px',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) { }
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };

  constructor(private ds: DataService,
    private toastr: ToastrService,
    private appService: AppService) { }

  ngOnInit() {
    const vm = this;
    vm.isAdmin = vm.appService.userObj && vm.appService.userObj.isAdmin;
    vm.getRules();
  }

  getRules() {
    const vm = this;
    const path = vm.isAdmin ? '/rules/all' : '/rules/active';
    vm.ds.getData(path).subscribe(res => {
      if (res && !res.error) {
        vm.rules = res.data;
      } else {
        vm.toastr.error('Unabale to get rules, try again!!!');
      }
    });
  }

}
