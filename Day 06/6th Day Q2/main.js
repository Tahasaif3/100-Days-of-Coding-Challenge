// shrinking guest list
var guests = ["Abdullah", "Uzair", "Zakir", "Fiyaz"];
console.log("Great News! I found a Bigger Dinner Table");
// Adding More guests
guests.unshift("Taha");
guests.splice(guests.length / 2, 0, "Ahmed");
guests.push("Hamza");
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, " would you like to join me for the dinner?"));
});
//Q17th
console.log("Unfortunately, I can only invite two people for the dinner.");
while (guests.length > 2) {
    var removedGuests = guests.pop();
    console.log("Sorry ".concat(removedGuests, " I can't invite you to the dinner."));
}
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, " you are still invited to the dinner"));
});
guests.splice(0, guests.length);
console.log(guests);
