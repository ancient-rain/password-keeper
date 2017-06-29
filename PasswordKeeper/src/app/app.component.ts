import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showSignOut = false;
  private authStateSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        // Signin just happened
        this.showSignOut = true;
      } else {
        // Signout just happened
        this.showSignOut = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
