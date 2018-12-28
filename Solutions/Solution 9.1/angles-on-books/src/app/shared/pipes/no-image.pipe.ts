import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string, defaultImage: string): string {
    defaultImage = defaultImage ? defaultImage: '/assets/images/NoImage.png';
    return value ? value : defaultImage;
  }
}
