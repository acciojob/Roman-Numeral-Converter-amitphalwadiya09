function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    for (let key in obj) {
        const symbol = obj[key][0];
        const value = obj[key][1];

        while (num >= value) {
            result += symbol;
            num -= value;
        }

        // Check for subtractive notation
        const nextKey = (key - 2) >= 0 ? key - 2 : key - 1;
        const nextSymbol = obj[nextKey][0];
        const nextValue = obj[nextKey][1];

        if (nextKey >= 0 && num >= (value - nextValue)) {
            result += nextSymbol + symbol;
            num -= (value - nextValue);
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to the console.
// To run it with input 36, uncomment the following line
// console.log(convertToRoman(36));

// Do not edit below this line
module.exports = convertToRoman;

