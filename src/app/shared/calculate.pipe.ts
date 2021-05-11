import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from './utils.component';
import memo from 'memo-decorator';

@Pipe({
  name: 'calculate',
})
export class CalculatePipe implements PipeTransform {
  transform(value: any): number {
    console.log('Calculating Pipe');
    const result = fibonacci(value);
    return result;
  }
}
