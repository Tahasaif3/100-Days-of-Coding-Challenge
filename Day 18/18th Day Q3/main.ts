function createObjectwithDynamicKey(key:string, value:string) {
   let  dynamicObject = {}
 dynamicObject[key] = value;
 return dynamicObject
}
let userPreference = createObjectwithDynamicKey("theme", "dark");

console.log(userPreference);






