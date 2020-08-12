import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[],filter:string,region:string): any {
    if (!items || (!filter && !region)) {
      return items;
  }

  return   items.filter(item => {
    if(region !="" && item.region != region) return false ;
    //convert item to string
 let   sitem = JSON.stringify (item).toLowerCase() ;
 // check that filter word found in item
return  sitem.toLowerCase().includes(filter.toLowerCase())
  } )
  }

}
