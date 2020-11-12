import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  user: any;
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  ngOnInit(): void {
    console.log(this.local.redirected)
  }
  func(user) {
    var obj = {
      username: user,
    };
    this._http.checkExistingNames(obj).subscribe((data) => {
      this.user = data;
    });

  }
  signin() {
    this.router.navigateByUrl('/signin/student');
  }
  // sign up student
  collect(username, email, secretinfo, password) {
    var obj = { username, email, secretinfo, password };
    var nameObj = { username };
    this._http.checkuserNames(nameObj).subscribe((data) => {
      console.log(data);
      if (!data) {
        console.log('false');
        this._http.register(obj).subscribe((data) => {
          this.router.navigateByUrl('/signin/student');
          this.local.redirected = true;
          console.log('inside the function ',this.local.redirected);
        });
      } else {
        console.log('true');
        alert('name already existing');
      }
    });

  }
}
