import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './books/book-list.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
      path: '',
      component: BookListComponent
  },
  {
      path: 'about',
      component: AboutComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
