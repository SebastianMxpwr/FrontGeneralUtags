import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pasajero } from '../models/pasajero'
import { JwtResponseP } from '../models/JwtResponseP'
import { tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  url: string = "http://localhost:3000"
  authSubejct = new BehaviorSubject(false)
  public token: string
  pasajeroNombre: string
  pasajeroEmail: string
  pasajeroNumero: [number]
constructor(private http: HttpClient) {
 }

register(pasajero: Pasajero ): Observable<JwtResponseP>{
  return this.http.post<JwtResponseP>
  (`${this.url}/register/pasajero`, pasajero).pipe(tap((res:JwtResponseP)=>{
    if(res){
      this.saveToken(res.dataPasajero.accessToken, res.dataPasajero.expiresIn)
      this.pasajeroNombre = res.dataPasajero.strNombre
      this.pasajeroEmail = res.dataPasajero.strEmail
      this.pasajeroNumero = res.dataPasajero.nmbCelular
      console.log(this.pasajeroNombre, this.pasajeroNumero, this.pasajeroEmail)
      console.log(res)
    }
  }))
}

login(pasajero: Pasajero): Observable<JwtResponseP>{
  return this.http.post<JwtResponseP>
  (`${this.url}/login/pasajero`,pasajero).pipe(tap((res:JwtResponseP) => {
    if (res){
      this.saveToken(res.dataPasajero.accessToken, res.dataPasajero.expiresIn)
      this.pasajeroNombre = res.dataPasajero.strNombre
      this.pasajeroEmail = res.dataPasajero.strEmail
      this.pasajeroNumero = res.dataPasajero.nmbCelular
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
