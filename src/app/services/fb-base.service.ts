import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference,Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore ) { }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('description', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  
  update(collectionName: string, id: string, data: T) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}
