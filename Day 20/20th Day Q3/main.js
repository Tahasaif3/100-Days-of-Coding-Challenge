var userProfile = function () {
    var name = "Taha";
    var age = 16;
    return {
        displayInfo: function () {
            console.log("Name:".concat(name, ", Age:").concat(age));
        }
    };
}();
userProfile.displayInfo();
