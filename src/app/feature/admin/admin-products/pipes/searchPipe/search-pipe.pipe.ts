import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../../models/product';

@Pipe({
  name: 'filter',
})
export class SearchPipePipe implements PipeTransform {
  transform(Products: ProductInterface[], search: string): ProductInterface[] {
    if (Products && search) {
      return Products.filter(
        (d) => d.title.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    }
    return Products;
  }
}