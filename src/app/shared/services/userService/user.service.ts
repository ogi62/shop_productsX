import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { User } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: User) {
    this.db.list('/users').update(user.uid,{
      name: user.displayName,
      email: user.email
    })
  }
}
