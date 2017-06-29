import { Component, OnInit } from '@angular/core';
import { Password } from "app/models/password.model";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  formPassword: Password;

  constructor(private dialogRef : MdDialogRef<PasswordDialogComponent>) {
    this.formPassword = new Password();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }
}
