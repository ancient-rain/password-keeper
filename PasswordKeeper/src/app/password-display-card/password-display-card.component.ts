import { Component, OnInit, Input } from '@angular/core';
import { Password } from "app/models/password.model";

@Component({
  selector: 'app-password-display-card',
  templateUrl: './password-display-card.component.html',
  styleUrls: ['../shared/common.scss', './password-display-card.component.scss']
})
export class PasswordDisplayCardComponent implements OnInit {

  @Input() password: Password;

  constructor() { }

  ngOnInit() {
  }

}
