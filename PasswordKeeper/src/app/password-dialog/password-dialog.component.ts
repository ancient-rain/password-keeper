import { Component, OnInit, Inject } from '@angular/core';
import { Password } from 'app/models/password.model';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import * as firebase from 'firebase/app';

interface PasswordDialogData {
  firebasePath: string;
  password?: Password;
}

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  formPassword: Password;
  title = 'Add a new password';

  constructor(private dialogRef: MdDialogRef<PasswordDialogComponent>,
    @Inject(MD_DIALOG_DATA) private dialogData: PasswordDialogData) {
    this.formPassword = new Password();
  }

  ngOnInit() {
    if (this.dialogData.password) {
      this.title = 'Edit this password';
      Object.assign(this.formPassword, this.dialogData.password);
    }
  }

  onSubmit() {
    try {
      const firebaeRef = firebase.database().ref(this.dialogData.firebasePath);

      if (this.dialogData.password) {
        firebaeRef.child(this.dialogData.password.$key).set(this.formPassword);
      } else {
        firebaeRef.push(this.formPassword);
      }

      this.dialogRef.close();
    } catch (e) {
      console.error('Submit error: ', e);
    }
  }
}
