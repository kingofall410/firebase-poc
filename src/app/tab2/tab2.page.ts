import { Component } from '@angular/core';

import { TestModel } from 'src/app/models/TestModel'
import {FirebaseDbService} from 'src/app/services/firebase-db.service'
import { FirebaseAuthService } from '../services/firebase-auth.service';

import { Observable, Observer, of } from 'rxjs';
import { delay } from 'q';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tms: TestModel[];
  public counter: number = 0;
  public myObservable: Observable<number>;

  constructor(private firebase: FirebaseDbService,
              private fireAuth: FirebaseAuthService) {
              }

  ngOnInit() {
    this.readFromDB();
  }

  public readFromDB() {

    this.firebase.getTestModelWith().subscribe();
  }

  public sequenceSubscriber(observer: Observer<number>) {
    // synchronously deliver 1, 2, and 3, then complete
    delay(4000).then(() => {
      observer.next(1);
      delay(1000).then(() => {
        observer.next(2);
        delay(1000).then(() => {
          observer.next(3);
          delay(1000).then(() => {    
            observer.complete();
          });
        });
      });
    });

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
  }

  public click() {
    console.log(this.counter);
    this.counter++;
    this.myObservable.subscribe(x => {console.log("Obs got: "+x)});
  }
}
