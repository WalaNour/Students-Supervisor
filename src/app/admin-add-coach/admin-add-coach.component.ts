import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-add-coach",
  templateUrl: "./admin-add-coach.component.html",
  styleUrls: ["./admin-add-coach.component.css"],
})
export class AdminAddCoachComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addCoach(fullName, image, email, diplome, experience, about, number) {
    var obj = { fullName, image, email, diplome, experience, about, number };
    this._http.addCoach(obj).subscribe((data) => {
      alert("coach is done");
    });
  }
  // DISCONNECT
  goback() {
    this.local.redirected = false;
    this.router.navigateByUrl("/admin/login");
  }
  // go to ban users interface
  ban() {
    this.router.navigateByUrl("/admin/ban");
  }
  // go to verification users interface
  verf() {
    this.router.navigateByUrl("/admin");
  }
  // go to memberships of training centers interface
  member() {
    this.router.navigateByUrl("/admin/update");
  }
  post() {
    this.router.navigateByUrl("/admin/delete");
  }
  feedback() {
    this.router.navigateByUrl("/AdminReport");
  }
  report() {
    this.router.navigateByUrl("/report/admin");
  }
  adTree() {
    this.router.navigateByUrl("/tree/admin");
  }
  coach() {
    this.router.navigateByUrl("/admin/addCoach");
  }
}
