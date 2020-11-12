import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-posts",
  templateUrl: "./admin-posts.component.html",
  styleUrls: ["./admin-posts.component.css"],
})
export class AdminPostsComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  posts: any;
  ngOnInit(): void {
    // get all the posts from database
    this._http.httpGetPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  seeMore(post) {
    // get the id of the post that you want to delete it
    var obj = { id: post.id };
    // delete the post and rerender the posts and alert deleted
    this._http.httpdeletePost(obj).subscribe((data) => {
      this.ngOnInit();
      alert("deleted :) ");
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
