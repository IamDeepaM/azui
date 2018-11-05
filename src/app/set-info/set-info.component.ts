import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-set-info',
  templateUrl: './set-info.component.html',
  styleUrls: ['./set-info.component.scss']
})
export class SetInfoComponent implements OnInit {

  imgUrl: String;
  description: String;

  constructor(private toastr: ToastrService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    const vm = this;
    vm.clearFields();
  }

  clearFields() {
    const vm = this;
    vm.imgUrl = '';
    vm.description = '';
  }

  onExit() {
    const vm = this;
    vm.activeModal.close(null);
  }

  onSubmit() {
    const vm = this;
    if (vm.imgUrl && vm.description) {
      const res = {};
      res['image'] = vm.imgUrl;
      res['desc'] = vm.description;
      vm.activeModal.close(res);
    } else {
      vm.toastr.error('please update both the info');
    }
  }
}
