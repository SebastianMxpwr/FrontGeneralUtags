import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePasajeroPageRoutingModule } from './home-pasajero-routing.module';
import { HomePasajeroPage } from './home-pasajero.page';
import { AgmCoreModule } from '@agm/core';
import { Plugins } from '@capacitor/core'
const Geolocation = Plugins.Geolocation;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    HomePasajeroPageRoutingModule
  ],
  declarations: [HomePasajeroPage]
})
export class HomePasajeroPageModule {}
