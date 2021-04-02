import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConductoService } from '../Services/conductor.service'

@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage implements OnInit {

  constructor(public conductorS: ConductoService, public router: Router) { }

  ngOnInit() {
  }

  onLogin(form){
    this.conductorS.login(form.value).subscribe(res=>{
      this.router.navigate(['/home/conductor'])
    },err=>{
      console.log(err)
    }
    )
  }

}
