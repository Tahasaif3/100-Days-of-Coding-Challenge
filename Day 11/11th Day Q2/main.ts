let current_users = ["admin", "user01", "user02", "user03", "user04", "user05"];
let new_users = ["user06", "user07", "user08", "user09", "user44"];

new_users.forEach((newUser) => {
    if (
      current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
      )
    ) {
      console.log(`${newUser} will need to enter a new username.`);
    } else {
      console.log(`${newUser} is available.`);
    }
  });