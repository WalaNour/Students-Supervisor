import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-posts-company-profile',
  templateUrl: './posts-company-profile.component.html',
  styleUrls: ['./posts-company-profile.component.css'],
})
export class PostsCompanyProfileComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  compPosts: any;
  ngOnInit(): void {
    this._http.findCompanyPosts(this.local.companyInfo).subscribe((data) => {
      this.compPosts = data;
    });
  }
  // save the data of post in local service the redirect to update component
  editPost(post) {
    this.local.post = post;
    this.router.navigateByUrl('updateCompPost');
  }
  //delete post by id
  deletePost(id) {
    var obj = { id };
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._http.deleteCompanyPosts(obj).subscribe((data) => {
          this.ngOnInit();
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
  // redirect to profile
  backToProfile() {
    this.router.navigateByUrl('company/profile');
  }
  searchProfil(profilName) {
    this._http.findProfil({ profilName }).subscribe((res) => {
      this.local.otherProfile = res;
      this.router.navigateByUrl('/resultSearch');
    });
  }
  ///////////////////////// redirect user //////////////////
  feed() {
    this.router.navigateByUrl('/post/company');
  }
  ownPosts() {
    this.router.navigateByUrl('/companyOwnPost');
  }
  studentApply() {
    this.router.navigateByUrl('notification');
  }
}
