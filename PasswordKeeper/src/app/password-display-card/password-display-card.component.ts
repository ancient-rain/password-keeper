import { Component, OnInit, Input } from '@angular/core';
import { Password } from "app/models/password.model";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-password-display-card',
  templateUrl: './password-display-card.component.html',
  styleUrls: ['../shared/common.scss', './password-display-card.component.scss'],
  animations: [
    trigger('showPassword', [
      state('collapsed', style({
        height: 0,
      })),
      state('expanded', style({})),
      transition('* => *', animate('.3s'))
    ])
  ]
})
export class PasswordDisplayCardComponent implements OnInit {

  @Input() password: Password;
  isExpanded = false;

  constructor() { }

  get showPasswordState(): string {
    return this.isExpanded ? 'expanded' : 'collapsed';
  }

  ngOnInit() {
  }

}
