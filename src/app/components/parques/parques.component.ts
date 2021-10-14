import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, DoCheck, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']

})

export class ParquesComponent implements OnChanges, OnInit, OnDestroy{
    @Input() nombre: string;
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor(){
        this.nombre = 'Parque natural para caballos'
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;

    }
    
    ngOnChanges(change: SimpleChanges): void {
        console.log(change);
        console.log("cambios con el on change")
    }
    
    ngOnInit(){
        console.log("Metodo OnInit cambiado")
    }

    
//     ngDoCheck(): void {
//       console.log("ejecuta el do check")
      
//   }

    ngOnDestroy(): void {
     console.log("Se va a eliminar el componente ondestroy")
    }

    emitirEvento(){
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,  
            'vegetacion': this.vegetacion,
            'abierto': this.abierto  
        })
    }


}