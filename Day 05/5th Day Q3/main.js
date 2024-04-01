var guestlist = ["Abdullah", "Uzair", "Zakir", "Fiyaz"];
var dontcome = guestlist[3];
console.log(guestlist, "Sorry I am Busy");
guestlist.splice(3, 4, "Taha");
guestlist.forEach(function (guestlist) { return console.log("Hey! ".concat(guestlist, " would you like to join me for the dinner?")); });
