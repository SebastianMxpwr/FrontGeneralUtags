import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPasajeroPage } from './register-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPasajeroPageRoutingModule {}
