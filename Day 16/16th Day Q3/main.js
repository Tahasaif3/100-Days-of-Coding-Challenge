var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var totalPricesSet1 = [1000, 2000, 3000];
var totalPricesSet2 = [2500, 4500, 5500];
var combinedPrices = __spreadArray(__spreadArray([], totalPricesSet1, true), totalPricesSet2.sort(function (a, b) { return a - b; }), true);
console.log(combinedPrices);
