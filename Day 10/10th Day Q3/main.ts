let username = ["admin", "user01", "user02", "user03", "user04"];

username.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report");
    } else {
        console.log(`Hello ${username} thankyou for logging in again`);
    }
});