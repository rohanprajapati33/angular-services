import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
  pure : false,
})
export class SortlistPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    return value.map((element: string) => element.toLowerCase());
  }

}