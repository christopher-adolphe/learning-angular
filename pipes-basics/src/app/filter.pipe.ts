import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterTerm: string, propName: string): unknown {
    const result = [];

    if (value.length === 0 || filterTerm === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName] === filterTerm) {
        result.push(item);
      }
    }

    return result;
  }

}
