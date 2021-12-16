class Ninja {
    constructor(name, health){
        this.name = name,
        this.health = health,
        this.speed = 3,
        this.strength = 3
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }

    showStats(){
        console.log(
            `Name: ${this.name} \nHealth: ${this.health} \nSpeed: ${this.speed} \nStrength: ${this.strength}
        `)
    }

    drinkSake(){
        this.health += 10
    }

}

let naruto = new Ninja('Naruto', 10)

naruto.drinkSake()
naruto.showStats()
