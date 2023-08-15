import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ErrorPageComponent } from '../shared/pages/error-page/error-page.component';

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
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
