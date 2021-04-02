import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PasajeroService } from '../Services/pasajero.service'

@Component({
  selector: 'app-login-pasajero',
  templateUrl: './login-pasajero.page.html',
  styleUrls: ['./login-pasajero.page.scss'],
})
export class LoginPasajeroPage implements OnInit {

  constructor(public pasajeroS: PasajeroService, public router:Router) { }

  ngOnInit() {
  }

  onLogin(form){
    this.pasajeroS.login(form.value).subscribe(res=>{
      this.router.navigate(['/home/pasajero'])
    },err=>{
      console.log(err)
    }
    )
  }

}
