var myFriend = ["Ahmed", "Uzair", "Basit", "Asim"];
console.log("I am inviting ".concat(myFriend.length, " Friends to the dinner. Here is the list:\n"));
for (var i = 0; i < myFriend.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFriend[i]));
}
