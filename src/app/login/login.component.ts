import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  @Output() Panel = new EventEmitter<boolean>();
  constructor() { }  

  OnLoginPanel(){
    let accion = true;
    this.Panel.emit(accion);
  }

}
