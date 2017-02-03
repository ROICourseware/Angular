import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { BookListComponent } from './books/book-list.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [ 
    {
        path: '',
        component: BookListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**', 
        redirectTo: '/'
    }];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutesModule { }

