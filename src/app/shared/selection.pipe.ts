import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selection',
})
export class SelectionPipe implements PipeTransform {
  transform(value: unknown, index: number): unknown {
    return { ...value[index] };
  }
}
