function fetchData(
    callback: (error: Error | null, data?: string) => void
  ): void {

    const error = new Error("Failed to fetch data? try again");
    const data = "Some Data";
  
    if (Math.random() > 0.7) {
      callback(null, data);
    } else {
      callback(error); 
    }
  }
  
  fetchData((error, data) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log(data);
    }
  });