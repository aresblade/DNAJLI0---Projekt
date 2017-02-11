import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any, term: any): any {
    //czy jest
    if (term === undefined) return movies;
    //zwroc cala tablice
    return movies.filter(function(movie){
      return movie.categoryIds.toString().toLowerCase().includes(term.toLowerCase());
    })
  }

}
