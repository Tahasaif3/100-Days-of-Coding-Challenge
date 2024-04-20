const myPromise = new Promise<string>((resolve, reject) => {
    const isSuccess = true;

    setTimeout(() => {
        if (isSuccess) {
            resolve("Hello, World!");
        } else {
            reject(new Error("Failed to fetch data"));
        }
    }, 2000);
});

myPromise.then((message) => {
    console.log("Resolved:", message);
});

myPromise.catch((error) => {
    console.error("Rejected:", error.message);
});
