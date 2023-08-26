import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';


import { NzInputModule } from 'ng-zorro-antd/input';


import { AuthenticationComponent } from '../pages/authentication/authentication.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class LayoutModule { }
