import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   //Code the pipe to transform the data 
    return ;
  }

}
