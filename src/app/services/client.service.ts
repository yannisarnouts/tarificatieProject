import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private fs: AngularFirestore) {
  }
  getClients() {
    return this.fs.collection('clients').get();
  }
}
