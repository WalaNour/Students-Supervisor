import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  socialData: any;
  socialObject: any;
  // halim: any;
  // userInfo: Object;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private http: HttpClient
  ) {}
  ROOT_URL = 'http://localhost:3000';

  // Sign in with Google
  googleAuth() {
    // console.log(this.AuthLogin(new firebase.auth.GoogleAuthProvider()));
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  // sign in with facebook
  facebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.socialData = result.additionalUserInfo.profile;
        // console.log('mandhrou=========>', this.socialData);
        this.socialObject = {
          name: this.socialData.name,
          email: this.socialData.email,
        };
        localStorage.setItem('userName', this.socialObject.name);
        localStorage.setItem('userEmail', this.socialObject.email);

        // return this.http.post(this.ROOT_URL + '/users/userSocialData', obj);

        // }).then(()=>{

        //    var obj = {
        //      name: this.socialData.name,
        //      email: this.socialData.email,
        //    };
        //    return this.http.post(this.ROOT_URL + '/users/userSocialData', obj);
        // })
      })

      .catch((error) => {
        window.alert(error);
      });
    // console.log(this.userInfo);
    // this.userInfo = {
    //   name: this.socialData.name,
    //   email: this.socialData.email,
    // };
    // return this.http.post(
    //   this.ROOT_URL + '/users/userSocialData',
    //   this.userInfo
    // );
  }
}
