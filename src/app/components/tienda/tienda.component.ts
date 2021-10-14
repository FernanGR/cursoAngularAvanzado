import { Component } from "@angular/core";


@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']

})

export class TiendaComponent{
    public titulo;
    public nombreDelParque: string = "Parque inicial";
    public miParque: any;

    constructor(){
        this.titulo = 'Esta es la tienda'
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event: any){
        console.log(event); 
        this.miParque = event;
    }

    cambiaNombre(){
        this.nombreDelParque = "nombre cambiado"
    }

}