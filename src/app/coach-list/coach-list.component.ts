import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-coach-list",
  templateUrl: "./coach-list.component.html",
  styleUrls: ["./coach-list.component.css"],
})
export class CoachListComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  coachList: any = [];

  ngOnInit(): void {
    this._http.getCoaches().subscribe((data) => {
      this.coachList = data;
      console.log(this.coachList);
    });
  }

  profile() {
    this.router.navigateByUrl("/studentProfile");
  }
}
