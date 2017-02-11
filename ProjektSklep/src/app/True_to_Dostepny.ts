import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'dostepny'})  

export class Replace implements PipeTransform {
  transform(value: string): string {
    let newValue = value.replace("true", "Dostępny");
    return `${newValue}`;
  }
}
