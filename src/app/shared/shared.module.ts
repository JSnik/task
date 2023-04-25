import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardComponent } from './slider/slider-card/slider-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    SliderComponent,
    SliderCardComponent
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
