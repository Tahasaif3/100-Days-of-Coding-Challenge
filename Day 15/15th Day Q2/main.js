function make_sandwich() {
    var Items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Items[_i] = arguments[_i];
    }
    console.log("making a sandwich with ".concat(Items.join(",")));
}
make_sandwich("Chicken Patty", "Egg", "Tomato", "lettuce");
make_sandwich("Bun", "Egg", "mayonese", "lettuce");
make_sandwich("Bread", "Cheese", "lettuce");
