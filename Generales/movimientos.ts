export interface Movimientos{
    atacar(ataque:number):void;
    descansar(restaurar:number):void;
    bloquear(bloqueo:number):void;
    avanzar(caminar:number):void;
    evolucionar():void;
    habilidades:string[];
}   

