import { Component, OnInit, Input } from '@angular/core';
import { RuleModel } from '../add-rule/rule.model';

@Component({
  selector: 'app-view-rule',
  templateUrl: './view-rule.component.html',
  styleUrls: ['./view-rule.component.scss']
})
export class ViewRuleComponent implements OnInit {

  @Input() rule: RuleModel;

  constructor() { }

  ngOnInit() {
    const vm = this;
  }

}
