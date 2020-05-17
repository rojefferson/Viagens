export class Produto{

    id : string;  
    preco : number
    lugarPartida : string;
    lugarChegada : string;
    urlImg : string;
    dataPartida : string;

    constructor(){
        this.clean();
    }

    clean(): void{
        this.preco = 0;
        this.lugarChegada = "";
        this.lugarPartida = ""
        this.urlImg = "";
        
    }

}