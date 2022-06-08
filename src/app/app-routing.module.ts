import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRouteComponent } from './components/test-route/test-route.component';

const routes: Routes = [
  {
    path: 'products',
    component: TestRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
