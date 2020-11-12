import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  post: any;
  comments: any;
  ngOnInit(): void {
    // get one post

    this.post = this.local.onePost;
    console.log('this is the element', this.local.onePost);
    this.getComment();
    // var obj = { postId: this.local.onePost.id };
    // this._http.getcomment(obj).subscribe((data) => {
    //   console.log(data);
    //   this.comments = data;
    // });
  }

  getComment() {
    this._http.getcomment({ postId: this.post.id }).subscribe((data) => {
      console.log(data);
      this.comments = data;
    });
  }

  comment(comment) {
    var obj = {
      postId: this.local.onePost?.id,
      username: this.local.user?.name,
      postsText: comment,
      imgUrl: this.local.user?.image,
    };
    this._http.addcomment(obj).subscribe((data) => {
      this.ngOnInit();
    });
  }

  searchProfil(profilName) {
    this._http.findProfil({ profilName }).subscribe((res) => {
      this.local.otherProfile = res[0];
      this.router.navigateByUrl('/resultSearch');
    });
  }
  profile() {
    this.router.navigateByUrl('/studentProfile');
  }
  takeMeToReports() {
    this.router.navigateByUrl('/sendReport');
  }
  feed() {
    this.router.navigateByUrl('/feed/student');
  }
  logOutStudent() {
    this.local.redirected = false;
    console.log(this.local.redirected);
    localStorage.setItem('token', '');
    this.router.navigateByUrl('/');
  }
}
