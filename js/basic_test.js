let str = "hello word";
console.log(str.toUpperCase());

let txt = "I can eat bananas all day";
console.log(txt.slice(10, 17));

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

console.log(Math.random());
const d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
d.setFullYear(2020);
console.log(Math.sqrt(9));

const obj = {
    name: "lisi",
    age: 15,
    printName: function () {
        console.log(this.name)
    }
}

obj.printName()