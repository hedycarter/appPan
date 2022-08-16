import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplacscreenPageRoutingModule } from './splacscreen-routing.module';

import { SplacscreenPage } from './splacscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplacscreenPageRoutingModule
  ],
  declarations: [SplacscreenPage]
})
export class SplacscreenPageModule {}
