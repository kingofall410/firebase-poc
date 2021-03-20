import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

import { TestModel } from 'src/app/models/TestModel'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private firestore: AngularFirestore) { }

  public getTestModel() {
    return this.firestore.collection('testmodel').snapshotChanges();
  }

  public getTestModelWith() {
    var r = this.firestore.collection('testmodel').doc("myid");
    console.log("inservice");
    console.log(r);
  }
}
