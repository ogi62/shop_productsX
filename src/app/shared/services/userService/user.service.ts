import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { User } from 'firebase/auth';
import { AppUser } from '../../models/app-user';



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

  get(uid: string): AngularFireList<AppUser>  {
    return this.db.list('/users/'+uid)
  }

  
}
