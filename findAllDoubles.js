const numbers = [10, 28, 5, 5, 10, 28];

//function that find all doubles in an array
const removeDouble = numbers => {
  let doubles = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) doubles.push(numbers[i]);
    }
  }

  return doubles;
};

let doubles = removeDouble(numbers);

console.log(`Liste of doubles : ${doubles.join(", ")}`);

//author : Bilal Akar