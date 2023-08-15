import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { HeaderComponent } from './components/header/header.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,


  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzCarouselModule
  ],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
