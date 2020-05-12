import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarificationService {

  constructor(private fs: AngularFirestore) {}

  getTable(id: string) {
    return this.fs.collection('tarieftabel').doc(id).get();
  }
}
