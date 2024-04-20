var myPromise = new Promise(function (resolve, reject) {
    var isSuccess = true;
    setTimeout(function () {
        if (isSuccess) {
            resolve("Hello, World!");
        }
        else {
            reject(new Error("Failed to fetch data"));
        }
    }, 2000);
});
myPromise.then(function (message) {
    console.log("Resolved:", message);
});
myPromise.catch(function (error) {
    console.error("Rejected:", error.message);
});
