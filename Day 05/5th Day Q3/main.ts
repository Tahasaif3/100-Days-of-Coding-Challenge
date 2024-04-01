let guestlist = ["Abdullah", "Uzair", "Zakir", "Fiyaz"];
let dontcome = guestlist[3];
console.log(guestlist, "Sorry I am Busy");

guestlist.splice(3,4,"Taha");
guestlist.forEach(guestlist => console.log(`Hey! ${guestlist} would you like to join me for the dinner?`));