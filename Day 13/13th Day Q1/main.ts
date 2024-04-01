function make_shirt(size:string="large",message:string="I love typescript"){
    console.log(`making a ${size} tshirt with the message ${message} printed on it`);
}
make_shirt("large","I love typescript")// default size message
make_shirt("medium") // default message medium size  
make_shirt("small","I love coding") // custom message, small size