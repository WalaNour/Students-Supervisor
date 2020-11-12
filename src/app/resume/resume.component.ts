import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"],
})
export class ResumeComponent implements OnInit {
  userData: any;
  dates1: any;
  ourImg: any;
  dates2: any;
  number: any;
  education: any;
  experience: any;
  skills: any;
  constructor(public local: LocalService, private _http: HttpService) {}
  ngOnInit(): void {
    this.experience = this.local.resume[3];
    this.education = this.local.resume[1];
    console.log(this.skills);
    this.dates1 = this.local.resume[0];
    this.dates2 = this.local.resume[2];
    this.number = this.local.resume[4];
    console.log(this.dates1, this.dates2);
    const userToken = localStorage.getItem("token");
    var obj = {
      token: userToken,
    };
    // get all data for user
    this._http.userProfil(obj).subscribe((res) => {
      this.userData = res[0];
      this.toDataURL(this.userData.profilePic, (dataUrl) => {
        this.ourImg = dataUrl;
      });
    });
  }
  public generatePDF() {
    var data = document.getElementById("wrapper");
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
}
