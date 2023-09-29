class character {
    constructor(name, sanity) {
        this.name = name
        this.sanity = sanity
    }
    trajectCharacter(playlist, redLightsNumber = 0 ) {
        let nbrChangeTaxi = 0
        
        while(redLightsNumber < 30 || John.sanity > 0){
            redLightsNumber++

            let random = Math.floor(Math.random() * musics.length);
            let things = playlist[random]
            console.log(random, musics[random]);
            
            console.log(" John arrive au feu " + redLightsNumber  )
            if(things === "Anissa - Wejdene") {
                this.sanity = this.sanity - 1
                console.log(" John a encore " + this.sanity + " de vie " )
                nbrChangeTaxi = nbrChangeTaxi + 1
                console.log(" John a changé de taxi " + nbrChangeTaxi + " fois " )
            }
            
            if(John.sanity === 0) {
                console.log(" John est mort " + John.sanity)
                break
            }
            
            if(redLightsNumber === 30) {
                console.log(" il est arrivé chez lui ")
                break
            }
        
    
        }
    }
}

let John = new character ("John", 10)
console.log(John)
let musics = ["Anissa - Wejdene", "Yellow - Coldplay", "My house - Florida", "Booker T - BadBunny", "AdanyEva - Paulo Londra" ]
console.log(musics)

John.trajectCharacter(musics)




