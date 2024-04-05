function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Mango", "Strawberry"];
replaceBananaWithMango(fruits);
console.log(fruits);
