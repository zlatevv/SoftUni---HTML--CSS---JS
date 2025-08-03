function cat(array){
    class Cat {
        constructor(name, age){
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }
    for (const str of array){
        let [name, age] = str.split(" ")
        let cat = new Cat(name, age)
        cat.meow();
    }
}