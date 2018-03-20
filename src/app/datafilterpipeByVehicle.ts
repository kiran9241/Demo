import * as _               from 'lodash';
import { Pipe,
         PipeTransform }    from '@angular/core';

@Pipe({
  name: 'dataFilterbyvehicle'
})
export class DataFilterPipeByVehicleNumber implements PipeTransform {
    transform(items: any[], filterQuery: any): any[] {
        if (!filterQuery) return items;
        return items.filter(function(item){
            return item.firstname.toLowerCase().includes(filterQuery.toLowerCase());
        })
    }


}

@Pipe({
  name: 'dataFilterbyId'
})
export class DataFilterPipeById implements PipeTransform {
    transform(items: any[], filterId: any): any[] {
        if (!filterId) return items;
        return items.filter(function(item){
            return item.username.toLowerCase().includes(filterId.toLowerCase());
        })
    }


}



@Pipe({
  name: 'dataFilterbylastname'
})
export class DataFilterPipeBylastname implements PipeTransform {
    transform(items: any[], filterlastname: any): any[] {
        if (!filterlastname) return items;
        return items.filter(function(item){
            return item.lastname.toLowerCase().includes(filterlastname.toLowerCase());
        })
    }


}
