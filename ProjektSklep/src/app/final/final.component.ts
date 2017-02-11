import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Routes, RouterModule, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { OrderComponent } from '../order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private http: Http, private router: Router) {
  }

 Podsumowanie: any = 0;
  moviesCart = [{

    id: Number,
    name: String,
    categoryIds: Object,
    isAvailable: String,
    copiesLeft: Number,
    fee: Number
  }];

Tablica_id = [];

 Smieszny_kodzik()
  {
     if (localStorage.length > 0) {
      var test2 = localStorage.getItem("tablica1");
      var test = JSON.parse(test2);
      this.moviesCart = test;

      this.moviesCart.forEach((row,index)=>{
			this.Tablica_id.push(row['id']);
		});


    }

    if (this.moviesCart.length > 0) {
      for (let movie of this.moviesCart) {
        this.Podsumowanie = movie.fee + this.Podsumowanie;
      }
            this.Podsumowanie = parseFloat(this.Podsumowanie).toFixed(2);

    }
  }




redirect() {
    this.router.navigate(['/order']);

  }
  redirectList() {
    this.router.navigate(['/list']);
       alert("Wypożyczono pomyślnie!");
  }

PostTo(name: string, surname: string, phone1: number, tab: any){
var headers = new Headers();
headers.append('Content-Type', 'application/json');
var param = this.http.post('http://localhost:8081/api/borrow',  
                     {
                     form: {
                       firstName: name,
                       lastName:surname, 
                       phone: phone1
                      },
                        movieIds: this.Tablica_id
                      },
                      {headers:headers}).subscribe(zmienna => { this.redirectList()},     err => this.logError(err._body),);
 
}

logError(err: any) {
        alert(err);
    }


  ngOnInit() {
  this.Smieszny_kodzik();
  }

}
