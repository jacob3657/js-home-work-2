
let numbers = [1, 5, 3, 2];

// step 1:
// use a for loop to write the value of
// each element in the array to the console.
// expect the console output to be
// 1
// 5
// 3
// 2

// hint: you will need to extract the number
// out of the array at each position and
// just console.log the number.

// step 2:
// improve your current code to calculate the total
// of all of the numbers in the array.
// hint: you will need a variable to hold total 
// and you will add the value of each number to the
// total as you move through the array.
for(index=0;index<numbers.length;index++){
    console.log(numbers[index]);
}
let total=0;
for (let index=0;index<numbers.length;index++){
    let number=numbers[index];
    total=total+numbers;
}
console.log(total);
