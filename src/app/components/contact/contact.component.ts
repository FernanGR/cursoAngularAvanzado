import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})

export class ContactComponent implements OnInit {
  title = 'Contactos';
  emailContacto:string = "";



    ngOnInit(){
        console.log("contact.componenet cargado")
    }

    guardarEmail(){
      this.emailContacto;
      localStorage.setItem('emailContacto', this.emailContacto);
      console.log(localStorage.getItem('emailContacto'));
    }
 
}
