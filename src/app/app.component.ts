import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso angular4 avanzado';
  emailContacto: any;

  ngOnInit() {
    console.log(localStorage.getItem('emailContacto'));
    this.emailContacto = localStorage.getItem('emailContacto');
   
  }

  ngDoCheck(): void {
    // console.log("ejecuta el do check")
    this.emailContacto = localStorage.getItem('emailContacto');

}

  borrarEmail(){
    localStorage.removeItem('emailContacto')
    localStorage.clear();
    this.emailContacto = null;
  }

}
