import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Routes, RouterModule, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { ListComponent } from '../list/list.component'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  inputs: ['listValue'],
})
export class OrderComponent implements OnInit {

  constructor(private http: Http, private router: Router) {
    this.moviesCart = [];
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

  remove1(index: number) {
    if (index > -1) {
      this.moviesCart.splice(index, 1);
      this.Podsumowanie = 0;

      for (let movie of this.moviesCart) {
        this.Podsumowanie = movie.fee + this.Podsumowanie;
      }
            this.Podsumowanie = parseFloat(this.Podsumowanie).toFixed(2);
    }

  }

  redirect() {
    if(this.moviesCart.length == 0)
    {
      alert("Nie wybrałeś żadnego produku!");
    }
    else
    {
    this.router.navigate(['/final']);
    localStorage.setItem("tablica1", JSON.stringify(this.moviesCart));

    }
  }

  Smieszny_kodzik()
  {
     if (localStorage.length > 0) {
      var test2 = localStorage.getItem("tablica");
      var test = JSON.parse(test2);
      this.moviesCart = test;
    }

    if (this.moviesCart.length > 0) {
      for (let movie of this.moviesCart) {
        this.Podsumowanie = movie.fee + this.Podsumowanie;
      }
      this.Podsumowanie = parseFloat(this.Podsumowanie).toFixed(2);
    }
  }

  ngOnInit() {
   this.Smieszny_kodzik();
  }

}
