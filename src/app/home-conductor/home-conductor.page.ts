import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core'
import { ConductoService} from '../Services/conductor.service'
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
const  { Geolocation } = Plugins;

@Component({
  selector: 'app-home-conductor',
  templateUrl: './home-conductor.page.html',
  styleUrls: ['./home-conductor.page.scss'],
})
export class HomeConductorPage implements OnInit {
  DestinoF: FormGroup
  currentCenter : any;
  coordinates : any [] = [];
  defaultZoom = 14;
  longitudO: any;
  latitudO: any;
  longitudD: any;
  latitudD: any;

ionViewDidEnter(){
  this.getCurrentPosition();
  this.watchPosition();
}
async getCurrentPosition(){
  const coordinates = await Geolocation.getCurrentPosition();
  this.currentCenter = {
    lat: this.latitudO,
    long: this.longitudO
    // lat: coordinates.coords.latitude,
    // long: coordinates.coords.longitude
  }
}

watchPosition(){
  Geolocation.watchPosition({}, position=>{
    this.currentCenter = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
    this.coordinates.push({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
  })
}

  constructor(private formBuilder: FormBuilder, public conductorS: ConductoService) { 
    this.DestinoF = this.formBuilder.group(
      {
        longitudD: new FormControl("",Validators.compose([
          Validators.required,Validators.email
        ])),
        latitudD: new FormControl("",Validators.compose([
          Validators.required, Validators.minLength(8)
        ])),
        longitudO: new FormControl("",Validators.compose([
          Validators.required, Validators.minLength(8)
        ])),
        latitudO: new FormControl("",Validators.compose([
          Validators.required, Validators.minLength(8)
        ]))
      }
    );
    }

  ngOnInit() {
    // this.conductorS.obtenerPasajeros()
  }

}
