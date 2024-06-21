// making aliases types

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    carID: boolean;
};

// using alias

let register: Person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 35,
    carID: true,
};

console.log(`Hi, ${register.firstName}! Your last name is ${register.lastName} and you are ${register.age} years old.`)
if (register.carID == true){
    console.log("You can drive a car.");
}
else {
    console.log("You can't drive a car");
};

// making type Car

type Car = {
    model: string,
    year: number,
    brand: string,
    price: number;
};

// using alias

let buyCar: Car = {
    model: "Compass",
    year: 2021,
    brand: "Jeep",
    price: 150.000,
}

if (register.carID == true){
    console.log(`${register.firstName}, you can buy a car. We have a ${buyCar.model} from ${buyCar.year} for ${buyCar.price.toFixed(3)}. Will you buy this car?`)
}
else{
    console.log("You can't also buy a car. Sorry!")
};