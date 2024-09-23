import { Routes } from "@angular/router";
import { ReviewListComponent } from "./review-list/review-list.component";


export const REVIEWS_ROUTES: Routes = [{
    path: 'reviews/:id',
    component: ReviewListComponent,
    data: { animation: 'reviewPage'}
}];
