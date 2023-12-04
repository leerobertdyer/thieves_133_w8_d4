// 1. Given the data below, define a type alias for representing users.

type User = {
    name: string,
    age: number,
    company?: string
}

let users: User[] = [
      
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

//Took a while to figure out to use a User[] array version...
//And to make company optional...


// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
let mon: Day = "Monday"

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
}

let bob = new Person("Robert", "MacDonald")

console.log(bob.fullName)

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee extends Person{
    constructor(firstName: string, lastName: string,  public salary:number){
        super(firstName, lastName)
    }
}

const peter = new Employee('Peter', 'Picado', 103000)

//still weirded out by 'public' but pretty neat that I don't have to even look at 'this' 

console.log(peter);

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Income {
    workType: string;
    salary: number;
}

interface Human {
    name: string;
    address: {
        street: string;
        city: string;
        zipCode: number;
    };
    income: Income;
}


let employee: Human =  {
    name: 'Christian Askew',
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    },
    income: {
        workType: "Grunt Worker", 
        salary: 1000000
    }
};