import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-admin-reports",
  templateUrl: "./admin-reports.component.html",
  styleUrls: ["./admin-reports.component.css"],
})
export class AdminReportsComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  reports: any;
  ngOnInit(): void {
    this._http.getReports().subscribe((data) => {
      console.log(data);
      this.reports = data;
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
