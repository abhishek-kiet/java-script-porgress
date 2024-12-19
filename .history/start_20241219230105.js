//! Function Make 

function show(){
    document.getElementById('block-1').style.display='none';
}


//! function return 

function returnFunction(x,y){
    return x * y ;
}

//!  Function to calculate Celcius To Fahrenheit 

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius();


//!  In JavaScript, almost "everything" is an object.
//!
//!  Objects are objects
//!  Maths are objects
//!  Functions are objects
//!  Dates are objects
//!  Arrays are objects
//!  Maps are objects
//!  Sets are objects
//!  All JavaScript values, except primitives, are objects.

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
// Create another Object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"
};

// Create a Copy
const y = car;

// Change Color
y.color = "blue";

console.log(car.make + " " + car.model + " is " + car.color);
  
  // Create a Copy
  const x = person;
  
  // Change Age
  x.age = 10;
  
  document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";
  //! here If change happen in Copied object then it will effect on main object 
  
  