var myPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello world");
    }, 2000);
});
myPromise.then(function (message) {
    console.log(message); // Output after 2 seconds: Hello, World!
});
