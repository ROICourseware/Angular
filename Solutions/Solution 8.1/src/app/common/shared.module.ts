import { DragAndDropDirective } from './drag-and-drop.directive';
import { RestHelperService } from './rest-helper.service';
import { NoImagePipe } from './no-image.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [NoImagePipe, DragAndDropDirective],
    exports: [NoImagePipe, DragAndDropDirective],
    providers: [RestHelperService]
})
export class SharedModule {}