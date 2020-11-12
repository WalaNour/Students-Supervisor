import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
@Component({
  selector: "app-choice",
  templateUrl: "./choice.component.html",
  styleUrls: ["./choice.component.css"],
})
export class ChoiceComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}

  ngOnInit(): void {}
  coaches() {
    this.router.navigateByUrl("/users/coachList");
  }
  trees() {
    this.router.navigateByUrl("/tree");
  }
}
