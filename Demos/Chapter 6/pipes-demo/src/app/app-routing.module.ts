import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardPipesComponent } from './pipes/standard-pipes/standard-pipes.component';

const routes: Routes = [
  {
    path: 'pipes',
    component: StandardPipesComponent
  },

  {
    path: '',
    redirectTo: '/pipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
