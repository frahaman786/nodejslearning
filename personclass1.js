class Person  {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeet(){
        console.log(`I am ${this.name} and my age ${this.age}`);
    }
    
    
}
export default Person;