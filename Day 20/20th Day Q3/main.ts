let userProfile = function() {
    let name = "Taha";
    let age = 16;
    return {
        displayInfo: function() {
            console.log(`Name:${name}, Age:${age}`);
            
        }
    }
}()
userProfile.displayInfo();


