import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students-trees',
  templateUrl: './students-trees.component.html',
  styleUrls: ['./students-trees.component.css']
})
export class StudentsTreesComponent implements OnInit {
 
  
  trees : any ; 
  paths : any = []; 
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this._http.getTrees().subscribe((data)=>{
      this.trees = data 
    })
  }
  getTree(treeName){
    this._http.getJoin({treeName}).subscribe((data: Array<any>)=>{
      this.paths = []
      for(var i = 0 ; i < data.length ; i++){
        var pathName  = data[i]?.pathName ; 
        
        this._http.getPathByName({pathName}).subscribe((data: Array<any>)=>{
            this.paths = this.paths.concat(data)
        })
      }
    })
  }

}


