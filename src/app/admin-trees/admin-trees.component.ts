import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-admin-trees",
  templateUrl: "./admin-trees.component.html",
  styleUrls: ["./admin-trees.component.css"],
})
export class AdminTreesComponent implements OnInit {
  validatingForm: FormGroup;
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  trees: any;
  paths: any;
  relations: any = {};
  ngOnInit(): void {
    this._http.getTrees().subscribe((data) => {
      this.trees = data;
    });
    this._http.getPaths().subscribe((data) => {
      this.paths = data;
    });
  }
  treesInfo(job, field) {
    var obj = { job, field };
    this._http.addTree(obj).subscribe((data) => {
      alert("succes added");
      this.ngOnInit();
    });
  }
  pathsInfo(
    name,
    stepOne,
    descOne,
    stepTwo,
    descTwo,
    stepThree,
    descThree,
    stepFour,
    descFour
  ) {
    var path = {
      name,
      stepOne,
      descOne,
      stepTwo,
      descTwo,
      stepThree,
      descThree,
      stepFour,
      descFour,
    };
    this._http.addPath(path).subscribe((data) => {
      alert("succes");
      this.ngOnInit();
    });
  }
  joinInfo() {
    this._http.addrelation(this.relations).subscribe((data) => {
      alert("succes");
      this.ngOnInit();
    });
  }
  addp(name) {
    this.relations.pathName = name;
  }
  addt(name) {
    this.relations.treeName = name;
  }
  displaytree(treeName) {
    this._http.getJoin({ treeName }).subscribe((data) => {
      console.log(data);
    });
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
