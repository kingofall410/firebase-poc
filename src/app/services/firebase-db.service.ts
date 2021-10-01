import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'

import { TestModel } from 'src/app/models/TestModel'
import { Observable, Observer, of } from 'rxjs';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  
  public data$: Observable<TestModel[]>;

  constructor(private firestore: AngularFirestore) { 
    //this.myObservable = new Observable<number>(this.sequenceSubscriber);
/*
    myObservable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );*/
  }

  

  public getTestModel() {
    return this.firestore.collection('testmodel').snapshotChanges();
  }

  public getTestModelWith() {
    let tmc : AngularFirestoreCollection<TestModel>;
    tmc = this.firestore.collection<TestModel>('testmodel');
    this.data$ = tmc.valueChanges();
    return this.data$;
  }

  public observableTests() {
    
  }
}
