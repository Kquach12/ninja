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


class Sensei extends Ninja{
    constructor(name){
        super(name, 200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom(){
        this.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}


let naruto = new Ninja('Naruto', 10)

naruto.drinkSake()
naruto.showStats()

let kakashi = new Sensei('Kakashi')

kakashi.speakWisdom()
kakashi.showStats()
