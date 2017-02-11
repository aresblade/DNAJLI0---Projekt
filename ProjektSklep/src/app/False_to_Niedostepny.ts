import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'niedostepny'})  

export class _Replace implements PipeTransform {
  transform(value: string): string {
    let newValue = value.replace("false", "Niedostępny");
    return `${newValue}`;
  }
}
