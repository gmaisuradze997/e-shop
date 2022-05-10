import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    BannerComponent,
    SliderComponent
  ],
  imports: [CommonModule],
  exports: [BannerComponent]
})

export class UiModule {}
