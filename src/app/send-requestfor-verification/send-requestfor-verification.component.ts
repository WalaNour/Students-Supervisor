import { Component, OnInit, ɵConsole } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-send-requestfor-verification",
  templateUrl: "./send-requestfor-verification.component.html",
  styleUrls: ["./send-requestfor-verification.component.css"],
})
export class SendRequestforVerificationComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  name: any;
  ngOnInit(): void {
    this.name = this.local.message;
  }
  verificationReq() {
    // send a verification request
    this._http
      .httpSendVerificationRequest({ username: this.name })
      .subscribe((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your request is sended",
          showConfirmButton: false,
          timer: 3500,
        });
        this.router.navigateByUrl("/wait");
      });
  }
}
