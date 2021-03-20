import { Component, OnInit } from '@angular/core';

import { TestModel } from 'src/app/models/TestModel'
import {FirebaseDbService} from 'src/app/services/firebase-db.service'
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tms: TestModel[];

  constructor(private firebase: FirebaseDbService,
              private fireAuth: FirebaseAuthService) {}

  ngOnInit() {
    this.firebase.getTestModel().subscribe(data => {
      console.log("frank");
      console.log(data);
      this.tms = data.map(e => {
        return e.payload.doc.data() as TestModel;
      })
    });
    console.log("I'm outside");
  }

  print() {
    this.firebase.getTestModelWith()
  }

  login() {
    this.fireAuth.login();
  }
}
