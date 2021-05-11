import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralUnoptimizedComponent } from './general-unoptimized/general-unoptimized.component';
import { OnPushUnoptimizedComponent } from './on-push-unoptimized/on-push-unoptimized.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/general-unoptimized',
    pathMatch: 'full'
  },
  {
    path: 'general-unoptimized',
    component: GeneralUnoptimizedComponent
  },
  {
    path: 'onpush-unoptimized',
    component: OnPushUnoptimizedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
