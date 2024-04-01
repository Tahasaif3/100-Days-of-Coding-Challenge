var username = ["admin", "user01", "user02", "user03", "user04"];
username.forEach(function (username) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(username, " thankyou for logging in again"));
    }
});
