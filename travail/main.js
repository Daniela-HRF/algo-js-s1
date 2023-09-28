class pokemon {
    constructor(name, pv, atk, def) {
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }

    attackPokemon(Pokemon){
        Pokemon.pv -= this.atk
    
    }

}

let Melofee = new pokemon ("Melofee", 100, 10, 6)
let Pikachu = new pokemon ("Pikachu", 150, 8, 9)



while(Melofee.pv >= 0 || Pikachu.pv >= 0){
    
    Melofee.attackPokemon(Pikachu)
    console.log("Pikachu : " + Pikachu.pv) 
    
    if(Pikachu.pv <= 0){
        break
    }

    Pikachu.attackPokemon(Melofee)
    console.log("Melofee : " + Melofee.pv)

    if(Melofee.pv <= 0){
        break
    }
}
    











