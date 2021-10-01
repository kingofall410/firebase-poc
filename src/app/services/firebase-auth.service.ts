import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, Observer, from } from 'rxjs';
import { delay } from 'q';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  public user$: Observable<any> = new Observable<any>();

  constructor(private fireAuth: AngularFireAuth) { 
    this.login();
  }

  public login() {
    this.user$ = from(this.fireAuth.signInWithEmailAndPassword("dancrown@gmail.com", "nirvana"));
    this.user$.subscribe(
      (res) => console.log("Logged in: " + res.user.email),
      (err) => console.log("Failed login: " + err)
    );
  }

  public logout() {
    this.user$ = from(this.fireAuth.signOut());
    this.user$.subscribe(
      (res) => console.log("Logged out: " + res),
      (err) => console.log("Failed logout: " + err)
    );
  }
}
