//day 6 q1 
var guests = ["Abdullah", "Uzair", "Zakir", "Fiyaz"];
console.log("Great News! I found a Bigger Dinner Table");
// Adding More guests
guests.unshift("Taha");
guests.splice(guests.length / 2, 0, "Ahmed");
guests.push("Hamza");
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, " would you like to join me for the dinner?"));
});
