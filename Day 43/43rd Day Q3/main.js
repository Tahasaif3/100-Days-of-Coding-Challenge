var _this = this;
var object = {
    name: "Taha",
    arrowFunction: function () {
        console.log(_this.name);
    },
    traditionalFunction: function () {
        console.log(this.name);
    }
};
object.arrowFunction();
object.traditionalFunction();
