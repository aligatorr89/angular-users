import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameIcon'
})
export class NameIconPipe implements PipeTransform {

  transform(value: string): string {
    const split = value.split(' ');
    return '(' + split[0][0].toUpperCase() + split[1][0].toUpperCase() + ')';
  }

}
