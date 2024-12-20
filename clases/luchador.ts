import { Movimientos } from "../Generales/movimientos";
import { Base } from "./base"
import * as readlineSync from 'readline-sync';
export class Luchador extends Base implements Movimientos{
    constructor(nivel:number,habilidades:string[],tipo:string,inteligencia:number,Vida:number,Aguante:number,agilidad:number,fuerza:number,destreza:number,constitucion:number){
        super(nivel,inteligencia,Vida,Aguante,agilidad,fuerza,destreza,constitucion,habilidades,tipo)
        this.nombre= this.setNombre();
    }
   
    public setNombre():string{
        let nombrePersonaje = readlineSync.question('Ingrese un nombre para su '+this.tipo+':');
        this.nombre = nombrePersonaje;
        return this.nombre;
}
    //      EL PERSONAJE ATACA
    atacar(ataque:number):void{
        let daño = ataque * this.agilidad
        if (daño > 55) {
            console.log('Tu '+ this.tipo +' Golpea al enemigo con su '+this.habilidades[0]+' la cual fue potenciada en base a su fuerza y le causo '+daño+' puntos de daño critico al enemigo!');
        }else{
            console.log('Tu '+ this.tipo +' golpea con '+daño+' puntos de daño');
        }
    }
    //      EL PERSONAJE DESCANSA Y RECUPERA PUNTOS DE AGUANTE
    descansar(restaurar: number): void {
        let descansar = restaurar + this.Aguante
        console.log('Tu '+ this.tipo +' descansa y recupera '+descansar+' puntos de aguante');        
    }
    //      EL PERSONAJE BLOQUEA
    bloquear(bloqueo: number): void {
        let bloquear = bloqueo + this.constitucion
        console.log('Tu '+ this.tipo +' bloquea '+bloquear+' puntos de daño');
    }
    //      El PERSONAJE AVANZA AL SIGUIENTE PUNTO
    avanzar(caminar: number): void {
        let pasos:number = caminar * caminar;
        console.log('Tu '+ this.tipo +' avanza '+pasos+' pasos');
    }
    cambiarTipo(nuevoTipo: string): void {
        console.log(`${this.nombre} ha evolucionado a ${nuevoTipo}!`);
        this.tipo = nuevoTipo;
    }

    evolucionar(): void {
        this.cambiarTipo('Guerrero Furia');
        this.habilidades.push('Espada de la Muerte');
        this.Vida += 220;this.nivel += 9;
        this.fuerza += 20;
    }
    cajaMagica():void{
        let nuevaHabilidad = 'Golpe de Hierro';
        console.log('tu '+this.tipo+' ha encontrado una caja magica y obtuvo la habilidad de ' + nuevaHabilidad);
        this.habilidades.push(nuevaHabilidad)
    }
}