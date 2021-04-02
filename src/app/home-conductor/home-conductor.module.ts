import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import { HomeConductorPageRoutingModule } from './home-conductor-routing.module';
import { HomeConductorPage } from './home-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    ReactiveFormsModule, 
    HomeConductorPageRoutingModule
  ],
  declarations: [HomeConductorPage]
})
export class HomeConductorPageModule {}
