import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Conductor } from '../models/conductor'
import { JwtResponseC } from '../models/JwtResponseC'
import { tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConductoService {

  url: string = "http://localhost:3000"
  public token: string
  authSubejct = new BehaviorSubject(false)
  nombre: string
constructor(private http: HttpClient) {
  this.nombre=''
 }

 register(conductor: Conductor ): Observable<JwtResponseC>{
  return this.http.post<JwtResponseC>
  (`${this.url}/register/conductor`, conductor).pipe(tap((res:JwtResponseC)=>{
    if(res){
      this.saveToken(res.dataConductor.accessToken, res.dataConductor.expiresIn)
      res.dataConductor.strNombre = this.nombre
    }
  }))
}

login(conductor: Conductor): Observable<JwtResponseC>{
  return this.http.post<JwtResponseC>
  (`${this.url}/login/conductor`,conductor).pipe(tap((res:JwtResponseC) => {
    if(res){
      this.saveToken(res.dataConductor.accessToken, res.dataConductor.expiresIn)
    }
  }))
  
}

logout(){
  this.token=''
  localStorage.removeItem("ACCES_TOKEN")
  localStorage.removeItem("EXPIRES_IN")
}

private saveToken(token: string, expiresIn: string): void{
  localStorage.setItem('ACCES_TOKEN', token)
  localStorage.setItem('EXPIRES_IN', expiresIn)
  this.token=token
}
}
