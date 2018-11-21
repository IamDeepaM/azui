import { NgModule, NgModuleRef, Component, OnInit, Input, ViewChild,
ViewContainerRef, Compiler, Injector, ComponentRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RuleModel } from '../add-rule/rule.model';

@Component({
  selector: 'app-view-rule',
  templateUrl: './view-rule.component.html',
  styleUrls: ['./view-rule.component.scss']
})
export class ViewRuleComponent implements OnInit {

  @Input() rule: RuleModel;
  @ViewChild('ruleViewContainer', {read: ViewContainerRef}) rvc: ViewContainerRef;
  private cmpRef: ComponentRef<any>;

  constructor(private compiler: Compiler,
    private injector: Injector,
    private moduleRef: NgModuleRef<any>) { }

  ngOnInit() {
    const vm = this;
    const start = '<div class="vrc flx-row-na"><div class="col-md-6 ch ch-l">';
    const right = '</div><div class="col-md-6 ch ch-r">';
    const image = '<img src="{{imgUrl}}" class="over-image" *ngIf="imgUrl">';
    const desc = '<div class="over-data" *ngIf="description"><div>Description :</div><div class="desc-view">{{description}}</div></div>';
    const end = '</div></div>';
    const content = start + vm.rule.content + right + image + desc + end;
    vm.createComponentFromRaw(content);
  }

  createComponentFromRaw(template: string, styles = null) {
    const vm = this;

    const tmpCmp = Component({ template, styles })(class {
      private imgUrl: String = null;
      private description: String = null;
      ngOnInit() {}
      onDataOver(event) {
        const dvm = this;
        dvm.imgUrl = event.target.attributes.link.value;
        dvm.description = event.target.attributes.desc.value;
      }
      onClear() {
        const dvm = this;
        dvm.description = '';
        dvm.imgUrl = null;
      }
    });

    const tmpModule = NgModule({
      imports: [RouterModule, CommonModule],
      declarations: [tmpCmp],
    })(class {});

    vm.compiler.compileModuleAndAllComponentsAsync(tmpModule).then((factories) => {
      const f = factories.componentFactories[factories.componentFactories.length - 1];
      vm.cmpRef = f.create(vm.injector, [], null, vm.moduleRef);
      vm.cmpRef.instance.name = 'dynamic-rule-view-component';
      vm.rvc.insert(vm.cmpRef.hostView);
    });
  }
}
