import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtimeMovie',
  standalone: true
})
export class RuntimeMoviePipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    let hours: any = Math.floor(value / 60);
    let mins: any = value % 60;

    hours = hours < 10 ? `0${hours}`: hours;
    mins = mins < 10 ? `0${mins}` : mins;
    return `${hours}:${mins}:00`;
  }

}
