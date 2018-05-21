Function.prototype.inherits = function(parent) {
  const child = this;
  let Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
};

function Animal(name, color) {
  this.name = name;
  this.color = color;
  this.lick = function() {
    console.log(`${this.name} licks you`);
  };
}

function Dog(name, color, breed) {
    Animal.call(this, name, color);
    this.breed = breed;
    this.bark = function (){
    console.log(`${this.name} barks at you!`);
  };
}
// 
// const max = new Dog('max','brown', 'shitzu');
// max.bark();
// max.lick();
