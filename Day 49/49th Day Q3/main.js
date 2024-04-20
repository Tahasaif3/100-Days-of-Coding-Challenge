function fetchData(callback) {
    var error = new Error("Failed to fetch data? try again");
    var data = "Some Data";
    if (Math.random() > 0.7) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
