const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("First Promise");
    }, 1000); // Resolves after 1 second
});

const promise2 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Second Promise");
    }, 2000); // Resolves after 2 seconds
});

const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Third Promise Rejected"));
    }, 1500); // Rejects after 1.5 seconds
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log("All Promises resolved:", values);
    })
    .catch((error) => {
        console.error("One or more Promises rejected:", error);
    });
