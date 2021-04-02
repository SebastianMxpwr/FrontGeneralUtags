import { Component, OnInit } from '@angular/core';
import { ConductoService } from '../Services/conductor.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-conductor',
  templateUrl: './register-conductor.page.html',
  styleUrls: ['./register-conductor.page.scss'],
})
export class RegisterConductorPage implements OnInit {

  constructor(public conductorS: ConductoService, public router:Router) { }

  ngOnInit() {
  }

  onRegister(form){
    this.conductorS.register(form.value).subscribe(res=>{
      this.router.navigate(['/home/conductor'])
      console.log(res)
    }, err=>{
      console.log(err)
    })
  }

}
