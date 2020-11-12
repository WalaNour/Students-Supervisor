import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-weekly-update",
  templateUrl: "./admin-weekly-update.component.html",
  styleUrls: ["./admin-weekly-update.component.css"],
})
export class AdminWeeklyUpdateComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  trainingCenters: any;
  ngOnInit(): void {
    // get all the training centers name's and memberships
    this._http.httpGetTrainingCenter().subscribe((data) => {
      this.trainingCenters = data;
    });
  }
  //////////////// update the number of posts ////////////////////////////
  silver() {
    this._http.httpUpdateSilver().subscribe((data) => {
      alert("silver up to date");
    });
  }
  gold() {
    this._http.httpUpdateGold().subscribe((data) => {
      alert("Gold up to date");
    });
  }
  plat() {
    this._http.httpUpdateSilver().subscribe((data) => {
      alert("Plat up to date");
    });
  }

  /////////////////// Change the membership ///////////////////////////////////
  toPlat(name) {
    var obj = { name: name };
    this._http.upgreadToPlat(obj).subscribe((data) => {
      this.ngOnInit();
      alert("up to plat");
    });
  }
  toGold(name) {
    var obj = { name: name };
    this._http.upgreadToGold(obj).subscribe((data) => {
      this.ngOnInit();
      alert("up to Gold");
    });
  }

  all() {
    this.plat();
    this.silver();
    this.gold();
  }
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
