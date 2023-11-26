class sundar{
    //Using methods
    setvalues(name1 , number1 , address1){
        this.name=name1;
        this.phnumber=number1;
        this.address=address1;
    }
    displayvalues(){
        console.log("My name is "+this.name+" and my number is "+this.phnumber+" and im from "+this.address);
    }
    

}
let s =new sundar();
s.setvalues("meenakshi sunaram" , 9087303183 , "Sivakasi");
s.displayvalues();
class sundar2{
    //constructor
    constructor (movie1, percentage,opinion){
        this.movie=movie1;
        this.percentage=percentage;
        this.opinion=opinion; 
    }
    displaymovie(){
        console.log("the movie name is " + this.movie+"and a rating percentage is "+this.percentage+" and my personal opinion is " +this.opinion)
    }
}
let s2 =new sundar2("Iam legend" +" "+90+ "It is a  good movie");
s2.displaymovie();

let s3 =new sundar2("who am i" +" "+98+ "It is a  wonerful movie");
s3.displaymovie();

let s4 =new sundar2("Alice in the winderland" +" "+80+ "It is a  nice movie");
s4.displaymovie();

//Encapsulation
class Person {
    // Private variables
    #name;
    #age;
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    // Public methods to access and modify private variables
    getName() {
      return this.#name;
    }
  
    getAge() {
      return this.#age;
    }
  
    setName(newName) {
      this.#name = newName;
    }
  
    setAge(newAge) {
      if (newAge >= 0) {
        this.#age = newAge;
      }
    }
  }
  
  // Create a person object
  let person = new Person('John Doe', 30);
  
  // Access private variables through public methods
  console.log(person.getName()); // Output: John Doe
  console.log(person.getAge());  // Output: 30
  
  // Modify private variables through public methods
  person.setName('Jane Doe');
  person.setAge(25);
  
  console.log(person.getName()); // Output: Jane Doe
  console.log(person.getAge());  // Output: 25
  
  //inheritance
  // Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method of the parent class
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  // Child class inheriting from the Animal class
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the parent class
      super(name);
      this.breed = breed;
    }
  
    // Method of the child class
    bark() {
      console.log(`${this.name} barks`);
    }
  
    // Overriding the speak method of the parent class
    speak() {
      console.log(`${this.name} says Woof!`);
    }
  }
  
  // Create instances of the classes
  const genericAnimal = new Animal('Generic Animal');
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  // Use methods of the classes
  genericAnimal.speak(); // Output: Generic Animal makes a sound
  
  myDog.speak(); // Output: Buddy says Woof!
  myDog.bark();  // Output: Buddy barks
  
// Define a class
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a property to the prototype of the Person class
  Person.prototype.country = 'Unknown';
  
  // Creating instances of Person
  const person1 = new Person('Alice', 25);
  const person2 = new Person('Bob', 30);
  
  // Accessing properties
  console.log(`${person1.name} is from ${person1.country}`); // Output: Alice is from Unknown
  console.log(`${person2.name} is from ${person2.country}`); // Output: Bob is from Unknown
  
  // Modifying the shared property through the prototype
  Person.prototype.country = 'USA';
  
  // Accessing the modified property
  console.log(`${person1.name} is from ${person1.country}`); // Output: Alice is from USA
  console.log(`${person2.name} is from ${person2.country}`); // Output: Bob is from USA

  
  // Define a JSON object
const personJSON = '{"name": "John", "age": 30, "city": "New York"}';

// Parse the JSON string into a JavaScript object
const personObject = JSON.parse(personJSON);

// Access properties of the JavaScript object
console.log(`Name: ${personObject.name}`);
console.log(`Age: ${personObject.age}`);
console.log(`City: ${personObject.city}`);

// Convert a JavaScript object to a JSON string
const carObject = { brand: 'Toyota', model: 'Camry', year: 2022 };
const carJSON = JSON.stringify(carObject);

console.log(`Car JSON: ${carJSON}`);

