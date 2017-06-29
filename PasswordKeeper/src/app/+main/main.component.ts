import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  showSignOut = false;
  private authStateSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        // Signin just happened
        console.log('user is signed in as: ', user.uid);
        this.showSignOut = true;
      } else {
        // Signout just happened
        console.log('user is not signed in');
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}
