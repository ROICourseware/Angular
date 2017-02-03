import { RestHelperService } from './rest-helper.service';
import { NoImagePipe } from './no-image.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [NoImagePipe],
    exports: [NoImagePipe],
    providers: [RestHelperService]
})
export class SharedModule {}