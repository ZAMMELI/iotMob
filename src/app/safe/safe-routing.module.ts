import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafePage } from './safe.page';

const routes: Routes = [
  {
    path: '',
    component: SafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafePageRoutingModule {}
