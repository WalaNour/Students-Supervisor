import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"],
})
export class ReportComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  reportedPost: any;
  ngOnInit(): void {
    this.reportedPost = this.local.reported;
  }
  report(name, reason, comment) {
    var obj = {
      name: name,
      reason: reason,
      comment: comment,
      postId: this.reportedPost.title,
    };
    this._http.reportPost(obj).subscribe((data) => {
      alert("reported");
    });
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
