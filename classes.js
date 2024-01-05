// A constructor function that inherits its prototype object from 
// a supertype constructor function can still have its own methods in 
// addition to inherited methods.

// For example, Bird is a constructor that inherits its 
// prototype from Animal:

function Animal(){}
    Animal.prototype.eat = function(){
        console.log("CHOMP CHOMP");
    }

function Bird(){}
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;

    // In addition to what is inherited from Animal, 
    // you want to add behavior that is unique to Bird objects. 
    // Here, Bird will get a poop() function. Functions are added 
    // to Bird's prototype the same way as any constructor function:

Bird.prototype.poop = function(){
    console.log("SHIIIIT");
};

let fern = new Bird();

// console.log(fern.eat())
// console.log(fern.poop())

