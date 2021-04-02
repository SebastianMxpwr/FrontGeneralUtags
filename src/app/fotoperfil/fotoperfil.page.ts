import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core'
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'
@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.page.html',
  styleUrls: ['./fotoperfil.page.scss'],
})
export class FotoperfilPage implements OnInit {

  fotousuario="../assets/imgs/foto.png"
  fotoactual: SafeResourceUrl
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async tomarFoto(){
    const imagen= await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
    this.fotoactual= this.sanitizer.bypassSecurityTrustResourceUrl(imagen&&imagen.dataUrl)
    this.fotousuario = imagen.dataUrl
  }

}
