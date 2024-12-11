import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafePageRoutingModule } from './safe-routing.module';

import { SafePage } from './safe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafePageRoutingModule
  ],
  declarations: [SafePage]
})
export class SafePageModule {}
