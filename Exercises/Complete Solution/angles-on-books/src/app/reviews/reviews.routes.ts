import { Routes } from "@angular/router";

export const REVIEWS_ROUTES: Routes = [{
    path: 'reviews/:id',
    loadComponent: () => import('./review-list/review-list.component').then(m => m.ReviewListComponent),
    data: { animation: 'reviewPage'}
}];
