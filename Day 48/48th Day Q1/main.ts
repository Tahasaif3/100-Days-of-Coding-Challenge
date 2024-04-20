const myPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve ("Hello world")
    },2000);
});

myPromise.then ((message) => {
console.log(message); // Output after 2 seconds: Hello, World!
})