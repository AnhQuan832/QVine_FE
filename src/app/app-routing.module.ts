import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
