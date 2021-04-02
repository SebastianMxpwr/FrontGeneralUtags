import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPasajeroPageRoutingModule } from './register-pasajero-routing.module';

import { RegisterPasajeroPage } from './register-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPasajeroPageRoutingModule
  ],
  declarations: [RegisterPasajeroPage]
})
export class RegisterPasajeroPageModule {}
