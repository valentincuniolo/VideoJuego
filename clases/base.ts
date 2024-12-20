import { Atributos } from '../Generales/Atributos';
export abstract class Base implements Atributos{
    public nombre:string;
    public nivel:number;
    public inteligencia:number;
    public Vida:number;
    public Aguante:number;
    public agilidad:number;
    public fuerza:number;
    public destreza:number;
    public constitucion:number;
    public habilidades:string[];
    public tipo: string;
    constructor(nivel:number,inteligencia:number,Vida:number,Aguante:number,agilidad:number,fuerza:number,destreza:number,constitucion:number,habilidades:string[],tipo:string){
            this.nombre ='';
            this.nivel = nivel;
            this.inteligencia = inteligencia;
            this.Vida = Vida;
            this.Aguante = Aguante;
            this.agilidad = agilidad;
            this.fuerza = fuerza;
            this.destreza = destreza;
            this.constitucion = constitucion;
            this.habilidades = habilidades;
            this.tipo = tipo;
        } 
    
}

