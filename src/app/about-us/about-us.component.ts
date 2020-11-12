import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";
import { FormControl } from "@angular/forms";
import { LocalService } from "../local.service";
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  ngOnInit(): void {}
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
}
