const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));



// Now lets try to define properties of Math.pi with this and set them to true
// This will throw an error
Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
    configurable: true
})
