import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/core';
import { PasajeroService} from '../Services/pasajero.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.page.html',
  styleUrls: ['./home-pasajero.page.scss'],
})
export class HomePasajeroPage implements OnInit {
  currentCenter : any;
  coordinates : any [] = [];
  defaultZoom = 14;

  constructor(public pasajeroS: PasajeroService, public router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.pasajeroS.logout()
    this.router.navigate(['/login/pasajero'])
  }

  ionViewDidEnter(){
    this.getCurrentPosition();
    this.watchPosition();
  }
  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      long: coordinates.coords.longitude
    }
  }
  
  watchPosition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }
    });
  }

}
