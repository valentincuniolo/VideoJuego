import { Mago } from "./clases/mago";
import { Arquero } from "./clases/arquero";
import { Luchador } from "./clases/luchador";
import { lanzarDado } from "./funciones/generales";
import { Paladin } from "./clases/paladin";

const paladin = new Paladin(1,['Sentencia','Proteccion Divina'],'Paladin',15,100,30,50,12,15,20); 
console.log(paladin.evolucionar());


// const mago = new Mago(1,['Bola de fuego','Circulo de Fuego'],'Mago',50,100,35,20,17,25,30);
//  console.log(mago.evolucionar());

// const luchador = new Luchador(1,['Golpe Fulminante','Puño de Hierro'],'Luchador',10,100,30,60,10,12,16);
// console.log(luchador.evolucionar());

// const arquero = new Arquero(1,['Flecha Certera','Flecha de Sombra'],'Arquero',10,100,40,10,8,18,12);
// console.log(arquero);
// // console.log(arquero.atacar(lanzarDado()));
// // console.log(arquero.descansar(lanzarDado()));
// // console.log(arquero.bloquear(lanzarDado()));

// console.log(arquero.evolucionar());

// console.log(arquero.atacar(lanzarDado()));
// console.log(arquero.descansar(lanzarDado()));
// console.log(arquero.bloquear(lanzarDado()));
// console.log(arquero.cajaMagica());
// console.log(arquero);


// // (1,10,100,50,15,8,18,12,5)