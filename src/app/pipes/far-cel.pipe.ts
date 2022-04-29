import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'farCel'
})
export class FarCelPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]= args
    return (value-32)*5/9;
  }

}
