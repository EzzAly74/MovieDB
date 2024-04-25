import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteAvg',
  standalone: true
})
export class VoteAvgPipe implements PipeTransform {

  transform(value: any, ...args: number[]): number {
    value = Number(value);
    console.log(value)
    return Number(value.toFixed(1));
  }

}
