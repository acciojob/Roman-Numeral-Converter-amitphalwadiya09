function convertToRoman(num) {
    const obj = 
	{
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

   for (let key in obj) {
        while (num >= obj[key][1]) {
            result += obj[key][0];
            num -= obj[key][1];
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to the console.
// To run it with input 36, uncomment the following line
// console.log(convertToRoman(36));

// Do not edit below this line
module.exports = convertT

