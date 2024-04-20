var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("First Promise");
    }, 1000); // Resolves after 1 second
});
var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Second Promise");
    }, 2000); // Resolves after 2 seconds
});
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error("Third Promise Rejected"));
    }, 1500); // Rejects after 1.5 seconds
});
Promise.all([promise1, promise2, promise3])
    .then(function (values) {
    console.log("All Promises resolved:", values);
})
    .catch(function (error) {
    console.error("One or more Promises rejected:", error);
});
