import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { About } from './about' //niepotrzebne 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
  
  
})
@Injectable()
export class AboutComponent implements OnInit {
  tekst = {
    name: String,
    hours: Object
  };
  constructor(private http: Http) { }
  

 getAbout(tekst) {
      var zmienna = this.http.get('http://localhost:8081/api/about')
      .map(response => response.json()).subscribe(
        function(response) {
          tekst.name = response.name;
          tekst.hours = response.hours},
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );
      
      console.log(zmienna);
  } 
          


  ngOnInit() {
        this.getAbout(this.tekst);
  }
}

