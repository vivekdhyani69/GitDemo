class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!

  function f(phrase) {
    return class {
      sayHi() { alert(phrase); }
    };
  }
  
  class User extends f("Hello") {}
  
  new User().sayHi(); // Hello