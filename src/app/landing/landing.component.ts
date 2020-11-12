import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log(this.local.redirected);
  }
  home() {
    this.router.navigateByUrl("/");
  }
  aboutUs() {
    this.router.navigateByUrl("/aboutUs");
  }
  ////////////////////////// redirect user ////////////////////////////////
  student() {
    this.router.navigateByUrl("/signup/student");
    this.local.redirected = true;
  }
  company() {
    this.router.navigateByUrl("/signup/company");
    this.local.redirected = true;
  }
  center() {
    this.router.navigateByUrl("/signup/center");
    this.local.redirected = true;
  }
  studentl() {
    this.router.navigateByUrl("/signin/student");
    this.local.redirected = true;
  }
  companyl() {
    this.router.navigateByUrl("/signin/company");
    this.local.redirected = true;
  }
  centerl() {
    this.router.navigateByUrl("/signin/center");
    this.local.redirected = true;
  }
  submitForm(username, typeOfUser, message) {
    let obj = { username, typeOfUser, message };
    console.log(obj);
    if (!obj.message) {
      alert("your msg please");
      return;
    }
    this._http.usersReport(obj).subscribe((data) => {});
    alert("thanks for your message'A CHANGER'");
  }
}