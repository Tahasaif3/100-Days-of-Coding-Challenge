// Synchronous example
console.log("Start");
function synchronousTask() {
    for (var i = 0; i < 3; i++) {
        console.log("Synchronous Task", i);
    }
}
synchronousTask();
console.log("End");
// Asynchronous example
console.log("Start");
function asynchronousTask(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}
function callbackFunction() {
    console.log("Asynchronous Task");
}
asynchronousTask(callbackFunction);
console.log("End");
