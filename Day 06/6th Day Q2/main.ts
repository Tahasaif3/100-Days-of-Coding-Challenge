// shrinking guest list
let guests = ["Abdullah", "Uzair", "Zakir", "Fiyaz"];
console.log("Great News! I found a Bigger Dinner Table");

// Adding More guests
guests.unshift("Taha");
guests.splice(guests.length / 2, 0, "Ahmed")
guests.push("Hamza");


guests.forEach(guests => {
    console.log(`Dear ${guests} would you like to join me for the dinner?`);
});
//Q17th
console.log("Unfortunately, I can only invite two people for the dinner.");

while(guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Sorry ${removedGuests} I can't invite you to the dinner.`);
}
guests.forEach(guests => {
    console.log(`Dear ${guests} you are still invited to the dinner`);
});
guests.splice(0, guests.length);
console.log(guests);