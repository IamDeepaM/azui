import { Component, OnInit, Input } from '@angular/core';
import { RuleModel } from '../add-rule/rule.model';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SetInfoComponent } from '../set-info/set-info.component';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.scss']
})
export class ContentInfoComponent implements OnInit {

  @Input() rule: RuleModel;
  query: string;
  content: any;
  imgUrl: String;
  description: String;

  constructor(private toastr: ToastrService,
    private modalService: NgbModal) {}

  ngOnInit() {
    const vm = this;
    vm.content = vm.rule.content;
  }

  onSearch() {
    const vm = this;
    if (vm.query) {
      vm.rule.content = vm.content.replace(new RegExp(vm.query, 'gi'), match => {
        return '<span class="highlight-text">' + match + '</span>';
      });
    }
  }

  onSetInfo() {
    const vm = this;
    if (!vm.query) {
      vm.toastr.error('Search query shouldn\'t be empty');
    } else {
      const modalRef = this.modalService.open(SetInfoComponent, { size: 'lg' });
      modalRef.result.then((result) => {
        if (result) {
          vm.rule.content = vm.content.replace(new RegExp(vm.query, 'gi'), match => {
            const matchReplace = '<span class="highlight-content" link="' + result.image + '" desc="' + result.desc
            + '" (mouseenter)="onDataOver($event)" (mouseleave)="onClear()">' + match + '</span>';
            return matchReplace;
          });
          vm.content = vm.rule.content;
        } else {
          vm.toastr.error('No config has been done');
        }
      });
    }
  }

  onDataOver(event) {
    const vm = this;
    vm.imgUrl = event.target.attributes.link.value;
    vm.description = event.target.attributes.desc.value;
  }

  onClear() {
    const vm = this;
    vm.description = '';
    vm.imgUrl = null;
  }
}
