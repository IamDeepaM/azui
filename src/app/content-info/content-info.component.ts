import { Component, OnInit, Input } from '@angular/core';
import { RuleModel } from '../add-rule/rule.model';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.scss']
})
export class ContentInfoComponent implements OnInit {

  @Input() rule: RuleModel;

  constructor() { }

  ngOnInit() {
  }

}
