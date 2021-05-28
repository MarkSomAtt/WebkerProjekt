import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    authenticated(): boolean {
        return this.afAuth.authState !== null;
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }

    SignUp(email :string, password:string) {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          window.alert("You have been successfully registered!");
          console.log(result.user)
        }).catch((error) => {
          window.alert(error.message)
        })
    }
    getuser(){
      return this.afAuth.currentUser.then((user) => {
        return user
      });
    }

    /* newPassword(newPassword: string) {
    return this.afAuth.currentUser.then((user) => {
      return user.updatePassword(newPassword);
    });
  } */

    /*  newEmail(newEmail: string) {
       return this.afAuth.currentUser.then((user) => {
         return user.updateEmail(newEmail);
       });
     } */

    /* updateCurrentUserName(name: string) {
      return this.afAuth.currentUser.then((user) => {
        return user.updateProfile({
          displayName: name
        });
      });
    } */

    /* passwordRemind(email: string): Promise<void> {
      return this.afAuth.sendPasswordResetEmail(email);
    } */

    /*  createUser(email: string, password: string, name?: string) {
       return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
         if (name) {
           this.updateCurrentUserName(name);
         }
         return result.user;
       });
     } */

}
