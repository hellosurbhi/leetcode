/**
 * @param {number} num
 * @return {string}
 */

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var intToRoman = function(num) {
  const romanCalculator = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

    let romanNumber = '';
    
    while (num > 0) {
        for (const [number, char] of romanCalculator) {
            while (num >= number) {
                num -= number;
                romanNumber += char;
            }
        }
    }

  return romanNumber;
};