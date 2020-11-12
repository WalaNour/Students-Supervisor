import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-student-feed",
  templateUrl: "./student-feed.component.html",
  styleUrls: ["./student-feed.component.css"],
})
export class StudentFeedComponent implements OnInit {
  posts: any;

  constructor(
    private _http: HttpService,
    public local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get all the posts
    document.getElementById("id01").style.display = "none";

    document.getElementById("hello").style.display = "none";
    document.getElementById("report").style.display = "none";
    this._http.httpGetPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  hello(post) {
    this.local.onePost = post;
    document.getElementById("hello").style.display = "block";
  }
  apply(obj) {
    // apply for post
    this._http.applystudent(obj).subscribe((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your application has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigateByUrl("/studentProfile");
    });
  }
  // see the all the post
  seeMore(post) {
    this.local.onePost = post;
    this.router.navigateByUrl("/post");
  }
  report(post) {
    this.local.reported = post;
    document.getElementById("report").style.display = "block";
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
}
