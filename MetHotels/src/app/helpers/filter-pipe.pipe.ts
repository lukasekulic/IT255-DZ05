import { Pipe, PipeTransform } from '@angular/core';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], price: number): any {
    if (!items) return [];
    if (!price) return items;
    return items.filter(it => {
      return it.price <= price;
    });
  }

}
