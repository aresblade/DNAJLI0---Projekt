import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Routes, RouterModule, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { OrderComponent } from '../order/order.component';
import { ListComponent } from './list.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  inputs: ['moviesCart'],
})
export class ListAdventure implements OnInit {

  constructor(private http: Http, private router: Router) {
   this.moviesCart = [];
  }

  moviesCart = [{

    id: Number,
    name: String,
    categoryIds: Object,
    isAvailable: String,
    copiesLeft: Number,
    fee: Number
  }];

  public movies = [{
    id: Number,
    name: String,
    categoryIds: Object,
    isAvailable: String,
    copiesLeft: Number,
    fee: Number
  }];

  a: number = 5;

  //Json pobiera śmieszne info z serwera
  getMovies() {
    this.http.get('http://localhost:8081/api/movies/adventure')
      .map((res: Response) => res.json())
      .subscribe(
      data => {
        this.movies = data

      },
      err => console.error(err),

      );
  }
  cos: any = [];
  //Button przenieś do order
  redirect() {
    this.router.navigate(['/order']);
    localStorage.setItem("tablica", JSON.stringify(this.moviesCart));

  }

  //Dodaje do koszyka
  addToCart(movie: any) {
    if (movie.copiesLeft > 0) {
      this.moviesCart.push(movie);

      movie.copiesLeft--;
    }
    else {
      alert("Skończyły się produkty");
      movie.isAvailable = "false"
    }
    if (movie.copiesLeft == 0) {
      movie.isAvailable = "false";
    }
  }






  nic: any[];
  index: number;


  //prostsza wersja remove
  remove1(index: number) {
    if (index > -1) {
      this.moviesCart.splice(index, 1);
    }


  }


  ngOnInit() {

    this.getMovies();
    localStorage.clear();

  }



}
