function make_sandwich (...Items:string[]) {
    console.log(`making a sandwich with ${Items.join(",")}`);   
} 
make_sandwich("Chicken Patty", "Egg", "Tomato", "lettuce",)
make_sandwich("Bun", "Egg", "mayonese", "lettuce")
make_sandwich("Bread", "Cheese", "lettuce")