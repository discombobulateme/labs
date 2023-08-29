const assert = require('assert');

// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

/* #################### AQUI ########################################### */
// prototype of Leopard.prototype is Object.prototype
// prototype of Lynx.prototype:
class Leopard {
  constructor(name) {
    this.name = name;
  }
  // has a hiss method
  hiss() {
    console.log(this.name + ': hsss');
  }
}
// prototype of Cat.prototype, extend Leopard
class Lynx extends Leopard {
  constructor(name) {
    super(name + 'the cat ');
  }
  // has a purr method
  purr() {
    console.log(this.name + ': prrr');
  }
}
// extends Lynx
class Cat extends Lynx {
  // has a meow method
  meow() {
    console.log(this.name + ': meow');
  }
  meow2() {
    console.log(this.name + ': meow2');
  }
}

const felix = new Cat('Felix '); //TODO replace null with instantiation of a cat
felix.meow(); // prints Felix the cat: meow
felix.purr(); // prints Felix the cat: prrr
felix.hiss(); // prints Felix the cat: hsss
felix.meow2();

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix);
const felixProtoProto = Object.getPrototypeOf(felixProto);
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto);

assert(Object.getOwnPropertyNames(felixProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(typeof felixProto.meow, 'function');
assert(typeof felixProtoProto.purr, 'function');
assert(typeof felixProtoProtoProto.hiss, 'function');
console.log('prototype checks passed!');
