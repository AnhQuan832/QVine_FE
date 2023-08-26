import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ReservationComponent } from '../../pages/reservation/reservation.component';
import { UserLayoutComponent } from './user-layout.component';

const routes: Routes = [

  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'reservation',
        component: ReservationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
