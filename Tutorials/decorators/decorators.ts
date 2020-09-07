const sealed:ClassDecorator = function(constructor:Function){
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  constructor.prototype.name = 'efef'
}

@sealed
class Greeter{
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter(' Class Decorators')