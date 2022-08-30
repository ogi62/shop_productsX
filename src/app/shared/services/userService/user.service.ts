import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { User } from 'firebase/auth';
import { AppUser } from '../../models/app-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  save(user: User) {
    this.db.list('/users').update(user.uid, {
      name: user.displayName,
      email: user.email,
    });
  }

  async get(uid: string) {
    let result = await this.db.database
      .refFromURL(
        'https://shop-productsx-default-rtdb.firebaseio.com/users/' + uid
      )
      .get()
      .then((res) => res.val());

    return result;
  }
}
