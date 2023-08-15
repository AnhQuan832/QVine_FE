import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ReservationComponent } from './reservation/reservation.component';
import { UserLayoutComponent } from './user-layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReservationComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    SharedModule,
    NzCarouselModule
  ]
})
export class UserLayoutModule { }
