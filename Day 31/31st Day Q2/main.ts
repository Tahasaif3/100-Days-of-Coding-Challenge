function removeLastElement<T>(arr:T[]): T | undefined {
    return arr.pop();
}


const favouriteFruits:string[] = ["Apple","Banana","Mango","Strawberry"]
console.log(removeLastElement(favouriteFruits))
console.log(favouriteFruits);

