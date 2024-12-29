
//energy-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyPage } from './energy.page';

const routes: Routes = [
  {
    path: '',
    component: EnergyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergyPageRoutingModule {}
