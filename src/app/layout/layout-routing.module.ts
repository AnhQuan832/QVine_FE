import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from '../pages/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user-layout/user-layout.module').then(m => m.UserLayoutModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
