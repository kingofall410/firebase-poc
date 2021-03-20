import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async login() {
    var result = await this.fireAuth.signInWithEmailAndPassword("dancrown@gmail.com", "nirvana");
    console.log(result);
  }
}
