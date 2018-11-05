import { Component, OnInit, Input } from '@angular/core';
import { RuleModel } from '../add-rule/rule.model';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  @Input() rule: RuleModel;

  constructor() { }

  ngOnInit() {
  }

}
