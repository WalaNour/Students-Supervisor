import { Component, OnInit, ɵConsole } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-student-login",
  templateUrl: "./student-login.component.html",
  styleUrls: ["./student-login.component.css"],
})
export class StudentLoginComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router,
    private auth: AuthService
  ) {}
  user: any;
  token: any = "";

  username: any;
  ngOnInit(): void {
    localStorage.getItem("token");
  }

  loginWithGoogle() {
    this.auth.googleAuth();
    setTimeout(() => {
      var obj = {
        name: localStorage.getItem("userName"),
        email: localStorage.getItem("userEmail"),
      };
      this._http.socialLogin(obj).subscribe((data) => {
        console.log("i got youtttt ", data);
        this.local.message = data[0].username;
        localStorage.setItem("token", data[0].token);
        var c1 =
          data[0].verification === "true" &&
          data[0].verRequest === "true" &&
          data[0].firstTime === "false";
        var c2 =
          data[0].verification === "true" &&
          data[0].verRequest === "true" &&
          data[0].firstTime === "true";
        var c3 =
          data[0].verification === "false" &&
          data[0].verRequest === "false" &&
          data[0].firstTime === "true";
        console.log(c1, c2, c3);
        var c4 =
          data[0].verification === "false" &&
          data[0].verRequest === "true" &&
          data[0].firstTime === "true";
        if (c1) {
          console.log("condition 1");
          this.router.navigateByUrl("/studentProfile");
        } else if (c2) {
          console.log("condition 2");
          this.router.navigateByUrl("/register/student");
        } else if (c3) {
          console.log("condition 3");
          this.router.navigateByUrl("/verification/request/student");
        } else if (c4) {
          console.log("condition 3");
          this.router.navigateByUrl("/wait");
        }
      });
    }, 8000);
  }

  loginWithFacebook() {
    this.auth.facebookAuth();

    setTimeout(() => {
      var obj = {
        name: localStorage.getItem("userName"),
        email: localStorage.getItem("userEmail"),
      };

      this._http.socialLogin(obj).subscribe((data) => {
        console.log("i got you againrrr ", data);
        this.local.message = data[0].username;
        localStorage.setItem("token", data[0].token);
        var c1 =
          data[0].verification === "true" &&
          data[0].verRequest === "true" &&
          data[0].firstTime === "false";
        var c2 =
          data[0].verification === "true" &&
          data[0].verRequest === "true" &&
          data[0].firstTime === "true";
        var c3 =
          data[0].verification === "false" &&
          data[0].verRequest === "false" &&
          data[0].firstTime === "true";
        console.log(c1, c2, c3);
        var c4 =
          data[0].verification === "false" &&
          data[0].verRequest === "true" &&
          data[0].firstTime === "true";
        if (c1) {
          console.log("condition 1");
          this.router.navigateByUrl("/studentProfile");
        } else if (c2) {
          console.log("condition 2");
          this.router.navigateByUrl("/register/student");
        } else if (c3) {
          console.log("condition 3");
          this.router.navigateByUrl("/verification/request/student");
        } else if (c4) {
          console.log("condition 3");
          this.router.navigateByUrl("/wait");
        }
      });
    }, 8000);
  }

  // to sign up
  singup() {
    this.router.navigateByUrl("/signup/student");
  }
  // sign in user and redirect acording to its data
  collectLog(username, password) {
    var data = {
      data: username.value,
    };
    this._http.getStudentsName(data).subscribe((data) => {
      this.local.message = data;
    });

    const obj = {
      username: username.value,
      password: password.value,
    };
    this._http.loginStudent(obj).subscribe((data) => {
      console.log(data);
      if (data) {
        this.token = data["token"];
        this._http
          .httpgetUserState({ username: username.value })
          .subscribe((data) => {
            this.local.message = data[0].username;
            var c1 =
              data[0].verification === "true" &&
              data[0].verRequest === "true" &&
              data[0].firstTime === "false";
            var c2 =
              data[0].verification === "true" &&
              data[0].verRequest === "true" &&
              data[0].firstTime === "true";
            var c3 =
              data[0].verification === "false" &&
              data[0].verRequest === "false" &&
              data[0].firstTime === "true";
            console.log(c1, c2, c3);
            var c4 =
              data[0].verification === "false" &&
              data[0].verRequest === "true" &&
              data[0].firstTime === "true";
            if (c1) {
              console.log("condition 1");
              this.router.navigateByUrl("/studentProfile");
            } else if (c2) {
              console.log("condition 2");
              this.router.navigateByUrl("/register/student");
            } else if (c3) {
              console.log("condition 3");
              this.router.navigateByUrl("/verification/request/student");
            } else if (c4) {
              console.log("condition 3");
              this.router.navigateByUrl("/wait");
            }
            localStorage.setItem("token", this.token);
          });
      } else {
        alert("wrong password");
      }
    });
  }
  func(user) {
    var obj = {
      username: user,
    };
    this._http.checkExistingNames(obj).subscribe((data) => {
      this.user = data;
    });
  }
  // sign up student
  collect(username, email, secretinfo, password) {
    var obj = { username, email, secretinfo, password };
    var nameObj = { username };
    this._http.checkuserNames(nameObj).subscribe((data) => {
      console.log(data);
      if (!data) {
        console.log("false");
        this._http.register(obj).subscribe((data) => {
          this.local.redirected = true;
          document.getElementById("id01").style.display = "none";
          console.log("inside the function ", this.local.redirected);
        });
      } else {
        console.log("true");
        alert("name already existing");
      }
    });
  }
  sign() {
    document.getElementById("id01").style.display = "block";
  }
}
