// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
/* We work for a company building a smart home thermometer. 
Our most recent task is this: "Given an array of temperatures of one day, 
calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/
//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

//* const calcTempAmplitude = function (temps) {
//*   let max = temps[0];
//*   let min = temps[0];

//*   for (let i = 0; i < temps.length; i++) {
//*     const curTemp = temps[i];
//*     if (typeof curTemp !== 'number') continue; //!when it gets to error it will skip it

//*     if (curTemp > max) max = curTemp;
//*     if (curTemp < min) min = curTemp;
//*   }
//*   console.log(max, min);
//*   return max - min;
//* };10
//* calcTempAmplitude([3, 7, 4, 1, 8]);
//* calcTempAmplitude(temperatures);

//* const amplitude = calcTempAmplitude(temperatures);
//* console.log(amplitude);
//max = 3
//max = 7

//problem 2:
// function should now receive 2 arrays of temps

// 1) understanding the problem
/* - with 2 arrays, should we implement functionality
twice? no! just merge two arrays.*/

// 2) breaking up into sub-problems
// - how to merge 2 arrays?

//* const calcTempAmplitudeNew = function (t1, t2) {
//*   const temps = t1.concat(t2);
//*   console.log(temps);

//*   let max = temps[0];
//*   let min = temps[0];

//*   for (let i = 0; i < temps.length; i++) {
//*     const curTemp = temps[i];
//*     if (typeof curTemp !== 'number') continue; //*when it gets to error it will skip it

//*     if (curTemp > max) max = curTemp;
//*     if (curTemp < min) min = curTemp;
//*   }
//*   console.log(max, min);
//*   return max - min;
//* };
//* calcTempAmplitude([3, 7, 4, 1, 8]);
//*  calcTempAmplitude(temperatures);

//* const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
//* console.log(amplitudeNew);

//part 3:

//const measureKelvin = function () {
//const measurement = {
//type: 'temp',
//unit: 'celsius',
//C) FIX
//value: Number(prompt('Degree celsius:')), //prompt the user for input //!returns string values
//value: 10,
//};

//B) FIND10
//console.table(measurement); //*generates a table in the console
//console.log(measurement.value);
//console.warn(measurement.value); //*generate warnings in the console
//console.error(measurement.value); //*generate errors in the console

//const kelvin = measurement.value + 273;
//return kelvin;
//};
//A)identify
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; //*when it gets to error it will skip it
//     //! debugger; can be used as a breakpoint for the debugger window
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//* console.log(amplitudeBug);

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//1.)understanding the problem
// - contains an array and print out what it will be in number of days
// - need a function that will output a string
// - solve the problem by breaking it down

//2.)breaking down the problem
// - create the arrays for temp and days
// - create function
// - log string to console

const data1 = [17, 21, 23]; //data1 array
const data2 = [12, 5, -5, 0, 4]; //data2 array

console.log(`...${data1[0]}ºC ...${data1[1]}ºC ...${data1[2]}ºC`); //console logging the first array
console.log(
  `...${data2[0]}ºC ...${data2[1]}ºC ...${data2[2]}ºC ...${data2[3]}ºC ...${data2[4]}ºC }ºC`
);
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    //starting from zero loop through the length of the array
    str += `${arr[i]}ºC in ${i + 1} days ...`; //add to the current value of the string
    //for every loop grabbing the parameter arr and using the data1 and data2 as an argument.
  }
  console.log('...' + str); //send it to the console
};
printForecast(data1); //input argument into function
printForecast(data2);
