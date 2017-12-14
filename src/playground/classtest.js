

class Person {

  constructor( name = 'Anonymous', age = 0 ){
    this.name = name;
    this.age = age;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`;
  }
  getGreeting(){
    return `Hi, I'm ${this.name}`;
  }
}

class Student extends Person{

  constructor( name, age, major ){
    super(name, age);
    this.major = major;
  }

  getDescription(){
    let description = super.getDescription();
    if (this.major) {
        description += ` and studies ${this.major}`;
    }
    return description ;
  }
}

class Traveller extends Person{

  constructor( name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `, I'm from ${this.homeLocation}`;
    }
    return greeting;
  }
}


const ryan = new Traveller('Ryan', 25, 'New Zealand');
console.log(ryan.getGreeting());

const meow = new Traveller('Meow', 3);
console.log(meow.getGreeting());
