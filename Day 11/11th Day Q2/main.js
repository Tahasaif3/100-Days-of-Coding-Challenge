var current_users = ["admin", "user01", "user02", "user03", "user04", "user05"];
var new_users = ["user06", "user07", "user08", "user09", "user44"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
