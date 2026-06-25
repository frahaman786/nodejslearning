class Tania {
    constructor(name, age, fathername){
        this.name = name;
        this.age = age;
        this.fathername = fathername;
    }
    greeting(){
        console.log(`Hey my name is ${this.name} and my age is ${this.age} and father name ${this.fathername}`);
    }
}
export default Tania;