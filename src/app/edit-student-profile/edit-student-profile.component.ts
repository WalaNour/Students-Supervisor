import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
@Component({
  selector: "app-edit-student-profile",
  templateUrl: "./edit-student-profile.component.html",
  styleUrls: ["./edit-student-profile.component.css"],
})
export class EditStudentProfileComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  user: any;
  userData: any;
  ngOnInit(): void {
    //get token from localStorage
    this.user = localStorage.getItem("token");
    const userToken = localStorage.getItem("token");
    var obj = {
      token: userToken,
    };
    this._http.userProfil(obj).subscribe((res) => {
      this.userData = res[0];
      console.log("this is data", res[0]);
    });
  }
  // update the student profile
  update([], [], userToken) {
    this._http.updateData(arguments).subscribe((data) => {});
    this.router.navigateByUrl("studentProfile");
  }
  profile() {
    this.router.navigateByUrl("/studentProfile");
  }
  takeMeToReports() {
    this.router.navigateByUrl("/sendReport");
  }
  feed() {
    this.router.navigateByUrl("/feed/student");
  }
  logOutStudent() {
    this.local.redirected = false;
    console.log(this.local.redirected);
    localStorage.setItem("token", "");
    this.router.navigateByUrl("/");
  }
  choice() {
    this.router.navigateByUrl("/users/choice");
  }
}
