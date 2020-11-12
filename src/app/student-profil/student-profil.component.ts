import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";

@Component({
  selector: "app-student-profil",
  templateUrl: "./student-profil.component.html",
  styleUrls: ["./student-profil.component.css"],
})
export class StudentProfilComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  userData: any;
  ngOnInit(): void {
    document.getElementById("id01").style.display = "none";
    const userToken = localStorage.getItem("token");
    var obj = {
      token: userToken,
    };
    // get all data for user
    this._http.userProfil(obj).subscribe((res) => {
      this.userData = res[0];
      console.log("this is data", res[0]);
      this.local.user = {
        image: this.userData.profilePic,
        name: this.userData.firstname,
      };
    });
  }
  navToEdit() {
    this.router.navigateByUrl("editStudent");
  }
  // search for other student profile
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
    document.getElementById("id01").style.display = "block";
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
  changedirection() {
    this.router.navigateByUrl("/addData");
  }
}
