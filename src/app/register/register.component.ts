import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{  

  @Output() Panel = new EventEmitter<boolean>();

  constructor() { }  

  OnRegistroPanel(){
    let accion = true;
    this.Panel.emit(accion);
  }

}
