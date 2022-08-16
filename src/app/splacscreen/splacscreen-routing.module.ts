import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplacscreenPage } from './splacscreen.page';

const routes: Routes = [
  {
    path: '',
    component: SplacscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplacscreenPageRoutingModule {}
