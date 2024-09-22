import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
  standalone: true
})
export class NoImagePipe implements PipeTransform {

  transform(value: string, defaultImage: string = '/images/NoImage.png'): string {
    return value ? value : defaultImage;
  }


}
