import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
@Component({
  selector: "app-add-data",
  templateUrl: "./add-data.component.html",
  styleUrls: ["./add-data.component.css"],
})
export class AddDataComponent implements OnInit {
  constructor(public local: LocalService, private router: Router) {}
  ngOnInit(): void {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  }
  tofirst() {
    document.getElementById("eight").style.display = "none";
    document.getElementById("first").style.display = "block";
  }
  tosecond(bigthitle, number) {
    this.local.resume[0].title = bigthitle;
    this.local.resume[5].Number = number;
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    console.log(bigthitle, number);
  }
  tothird(from, to, title, desc) {
    var str = from + " - " + to;
    this.local.resume[1].date1 = str;
    this.local.resume[2].education1 = title;
    this.local.resume[2].desc1 = desc;
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
  }
  toforth(from, to, title, desc) {
    var str = from + " - " + to;
    this.local.resume[1].date2 = str;
    this.local.resume[2].education2 = title;
    this.local.resume[2].desc2 = desc;
    document.getElementById("third").style.display = "none";
    document.getElementById("forth").style.display = "block";
  }
  tofifth(from, to, title, desc) {
    var str = from + " - " + to;
    this.local.resume[1].date3 = str;
    this.local.resume[2].education3 = title;
    this.local.resume[2].desc3 = desc;
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
  }
  tosix(from, to, title, desc) {
    var str = from + " - " + to;
    this.local.resume[3].date4 = str;
    this.local.resume[4].experience1 = title;
    this.local.resume[4].desc1 = desc;
    document.getElementById("fifth").style.display = "none";
    document.getElementById("six").style.display = "block";
  }
  toseven(from, to, title, desc) {
    var str = from + " - " + to;
    this.local.resume[3].date5 = str;
    this.local.resume[4].experience2 = title;
    this.local.resume[4].desc2 = desc;
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "block";
  }
  toeight(from, to, title, desc) {
    var str = from + " - " + to;
    this.local.resume[3].date6 = str;
    this.local.resume[4].experience3 = title;
    this.local.resume[4].desc3 = desc;
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "block";
  }
  end(skill1, skill2, skill3, skill4) {
    this.local.resume[6].skill1 = skill1;
    this.local.resume[6].skill2 = skill2;
    this.local.resume[6].skill3 = skill3;
    this.local.resume[6].skill4 = skill4;
    console.log(this.local.resume);
    this.router.navigateByUrl("/resume");
  }
}
