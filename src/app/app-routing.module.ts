import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login/pasajero',
  loadChildren:()=> import('./login-pasajero/login-pasajero.module').then(m => m.LoginPasajeroPageModule)
  },
  {
    path:'login/conductor',
  loadChildren:()=> import('./login-conductor/login-conductor.module').then(m => m.LoginConductorPageModule)
  },
  {
    path: 'register/pasajero',
    loadChildren: () => import('./register-pasajero/register-pasajero.module').then( m => m.RegisterPasajeroPageModule)
  },
  {
    path: 'register/conductor',
    loadChildren: () => import('./register-conductor/register-conductor.module').then( m => m.RegisterConductorPageModule)
  },
  {
    path: 'home/pasajero',
    loadChildren: () => import('./home-pasajero/home-pasajero.module').then( m => m.HomePasajeroPageModule)
  },
  {
    path: 'home/conductor',
    loadChildren: () => import('./home-conductor/home-conductor.module').then( m => m.HomeConductorPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'fotoperfil',
    loadChildren: () => import('./fotoperfil/fotoperfil.module').then( m => m.FotoperfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
