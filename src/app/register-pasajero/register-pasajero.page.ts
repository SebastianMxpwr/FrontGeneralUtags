import { Component, OnInit } from '@angular/core';
import { PasajeroService } from '../Services/pasajero.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-register-pasajero',
  templateUrl: './register-pasajero.page.html',
  styleUrls: ['./register-pasajero.page.scss'],
})
export class RegisterPasajeroPage implements OnInit {

  constructor(public router:Router, public pasajeroS: PasajeroService) { }

  ngOnInit() {
  }

  onRegister(form){
    this.pasajeroS.register(form.value).subscribe(res=>{
      this.router.navigateByUrl('/home/pasajero')
    }, err=>{
      console.log(err)
    })
  }

}
