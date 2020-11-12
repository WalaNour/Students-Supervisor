import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
import { FormControl } from "@angular/forms";
import Swal from "sweetalert2";
@Component({
  selector: "app-reports-to-admin",
  templateUrl: "./reports-to-admin.component.html",
  styleUrls: ["./reports-to-admin.component.css"],
})
export class ReportsToAdminComponent implements OnInit {
  RegistrationFrom: any;
  // FormGroup : any
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  ngOnInit(): void {}
  username = new FormControl("");
  typeOfUser = new FormControl("");
  message = new FormControl("");
  // console.log(name)
  submitForm(username, typeOfUser, message) {
    let obj = { username, typeOfUser, message };
    console.log(obj);
    if (!obj.message) {
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your feedBack is sendend , thanks!!",
      showConfirmButton: true,
      timer: 5000,
    });
    this._http.usersReport(obj).subscribe((data) => {});
  }
  searchProfil(profilName) {
    this._http.findProfil({ profilName }).subscribe((res) => {
      this.local.otherProfile = res[0];
      this.router.navigateByUrl("/resultSearch");
    });
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
}
