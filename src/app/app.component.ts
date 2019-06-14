import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  
  panelregistro:boolean;
  Menu = "inicio";


  onPanelRegistro(accion: boolean){
    this.panelregistro = accion;   
    if(this.panelregistro){
      this.Menu = "registro";
    }
  }

  onPanelLogin(accion: boolean){
    this.panelregistro = accion;   
    if(this.panelregistro){
      this.Menu = "login";
    }
  }

}
