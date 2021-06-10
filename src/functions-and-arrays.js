// Progression #1: Greatest of the two numbers
let greatestOfTwoNumbers = (num1, num2) => {
  return greaterNumber = num1 > num2 ? num1 : num2 > num1 ? num2 : num1;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let findScaryWord = (words) =>
{
  let value = 0, index = 0, lengthWord = "";
  if(words.length == 0)
  {
    return null;
  }
  else 
  {
    for(let i = 0; i< words.length; i++)
    {
      if(words[i].length > value)
      {
        value = words[i].length;
        index = i;
      }
      lengthWord = words[index];
    }
  }
  return lengthWord;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let netPrice = (numbers) => {
  let total = 0;
  numbers.forEach(element => {
    total += element;
  });
  return total;
}
//bonus round #3.1
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
let add = (mixedArr) => {
  let total = 0;
  if(mixedArr.length == 0)
  {
    return 0;
  }
  else
  {
    for(let i=0; i<mixedArr.length; i++)
    {
      if(typeof(mixedArr[i])=="string"){
        mixedArr[i] = mixedArr[i].length;
      }
      if(typeof(mixedArr[i])=="object"){
        //I DONT GET THIS, NOT WORKING
        throw "its an object/array";
      }
      total += mixedArr[i];
    }
  }
  return total;
}
// Progression #4: Calculate the average

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  let value = netPrice(numbersAvg);
  let totalNums = numbersAvg.length;
  return numbersAvg.length == 0 ? null : value/totalNums;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
let averageWordLength = (wordsArr) => {
  let total = 0;
  wordsArr.forEach(element => {
    let value = element.length;
    total += value;
  });
  return wordsArr.length == 0 ? null : total/wordsArr.length;
}
//4.3 mixed array
function avg (mixedArr) {
  let total = 0;
    mixedArr.forEach(element => {
      if(typeof(element)=="string")
      {
          total += element.length;
      }
        else    
        {
            total += element;
        }
    });
    return mixedArr.length == 0 ? null : total/mixedArr.length;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, value){
  for(let i=0; i<wordsFind.length; i++)
  {
    if(wordsFind.length==0)
    {
      return null;
    }
    else if(wordsFind[i]==value)
    {
      return true;
    }
  }
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount, value)
{
  let num = 0;
  wordsCount.forEach(element => {
    if(element==value)
    {
      num++;
    }
  })
  return num;
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
