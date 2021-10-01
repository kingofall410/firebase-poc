import { Component, OnInit } from '@angular/core';

import { TestModel } from 'src/app/models/TestModel'
import {FirebaseDbService} from 'src/app/services/firebase-db.service'
import { FirebaseAuthService } from '../services/firebase-auth.service';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tms: TestModel[];

  constructor(private firebase: FirebaseDbService,
              private fireAuth: FirebaseAuthService) {
    
              }

  login() {
    this.fireAuth.login();
  }

  print() {    
    this.fireAuth.user$.subscribe(
      (res) => console.log(res.user.email));
    //console.log(this.tms);
  }  

  logout() {
    this.fireAuth.logout();
  }
}
