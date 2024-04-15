const object = {
    name: "Taha",
    arrowFunction: () => {
        console.log(this.name);
    },
    traditionalFunction: function() {
        console.log(this.name);
}
};
object.arrowFunction();
object.traditionalFunction();