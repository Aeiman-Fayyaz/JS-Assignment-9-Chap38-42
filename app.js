// QUESTION 1
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// ANSWER

/*let a = Number(prompt("Enter the value of 'a'"))

let b = Number(prompt("Enter the power of 'b'"))

function power(a , b) {
    let result = a ** b
    return result
  }
document.write(a + "<sup>" , b , "</sup>" + " is " , power(a , b)) 

power(a , b)*/

// QUESTION 2
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// ANSWER

/*let userYear = prompt("Enter a year and check it's leap year or not")

switch (userYear) {
    case "2012":
        alert("Leap year")
        break;
    
    case "2016":
        alert("Leap year")
        break;
    
    case "2020":
        alert("Leap year")
        break;
    
    default:
        alert("Not a leap year")
        break;
}*/

// QUESTION 3
// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// ANSWER

/*let a = Number (prompt("Enter a length of a triangle side 'a' "))
let b = Number (prompt("Enter a length of a triangle side 'b' "))
let c = Number (prompt("Enter a length of a triangle side 'c' "))

function sidesOfTriangle(a , b , c) {
    let S = (a + b + c) / 2
    
    function areaOfTriangle(a , b , c) {
        let area = S * (S - a) * (S - b) * (S - c);
        document.write("<h4>Length of a triangle 'a':</h4>" , a , "<h4>Length of a triangle 'b':</h4>" , b ,
        "<h4>Length of a triangle 'c':</h4>" , c + "<br/>" , "<h4>Answer:</h4>" , "Length of a triangle is " , area 
        )
        
    }
    areaOfTriangle(a, b , c)
}
sidesOfTriangle(a, b ,c)*/

// QUESTION 4
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// ANSWER

/*let subjName1 = prompt("Enter your first subject name")
let subjName2 = prompt("Enter your second subject name")
let subjName3 = prompt("Enter your third subject name")

let subj1 = Number(prompt("Enter your subjects marks"))

let subj2 = Number(prompt("Enter your subjects marks"))

let subj3 = Number(prompt("Enter your subjects marks"))

let totalNum = Number(prompt("Enter your total marks"))

function mainFunction() {

    let avr = average(subj1 , subj2 , subj3)

    let perce = percentage(subj1 , subj2 , subj3 ,totalNum)

    document.write("<h2>Marksheet:</h2>" , "<h5>Subject Name:</h5>" , subjName1 , "<h5>Obtained Marks:</h5>" , subj1 , 
    "<h5>Subject Name:</h5>" , subjName2 , "<h5>Obtained Marks:</h5>" , subj2 , 
    "<h5>Subject Name:</h5>" , subjName3 , "<h5>Obtained Marks:</h5>" , subj3 , 
    "<h5>Total:</h5>" , totalNum , "<h5>Average Marks:</h5>" , avr , "<h5>Percentage:</h5>" , perce
    )
}

function average(subj1 , subj2 , subj3) {
  return ((subj1 , subj2 , subj3)/3).toFixed(2)

}

function percentage(subj1 , subj2 , subj3 , total) {
  return (((subj1 , subj2 , subj3) / total) * 100).toFixed(2)
  
}

mainFunction()*/

// QUESTION 5
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

// ANSWER

/*let str = prompt("Enter a paragraph")

let char = prompt("Enter a character and find the index number")

let indexNum = "-1"

let checkedIndex = "-1"

function findIndexOf(sentence , character) {
  for (let i = 0 ; i < sentence.length ; i++){
    if(sentence[i] == character){
      indexNum = i
      break
    }
    if(char == checkedIndex)
      indexNum = i
  }
}

findIndexOf(str , char)

if(indexNum !== "-1"){
  document.write("<h4>Paragraph</h4>", str , "<h4>Index Number of Character:</h4>" , "The index number is " , indexNum)
}
else{
  document.write("<h4>Paragraph</h4>", str , "<h4>Index Number of Character:</h4>" , "Your index number is " , indexNum)
}*/

// QUESTION 6
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// ANSWER

/*let sentence = "Quick brown fox jumps"

function deleteVowels() {
  for (i = 0 ; i < sentence.length ; i++){
    return sentence.replace(/[aeiouAEIOU]/g, '');
  }
}
let result = deleteVowels(sentence);

console.log(result);*/

// QUESTION 7
// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// ANSWER

/*let strStatement = prompt("Enter a Statement or Paragraph and check the vowels").toLowerCase()

let count = 0

let characters = []

function vowelFinder(statement) {
  for (let i = 0 ; i < statement.length ; i++){
    let firstCharacter = statement[i]
    let secondCharacter = statement[i + 1]
    if (vowelChecker(firstCharacter) && vowelChecker(secondCharacter)) {
      count++
      let merged = firstCharacter + secondCharacter
      characters.push(merged)
    }
  }
}

vowelFinder(strStatement)

function vowelChecker(char) {
  
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true
  default:
      return false
  }
}

document.write("<h4>Statement:</h4>" , strStatement , "<h4>Number of vowels:</h4>" , count , "<h4>Vowels in your Statement:</h4>" , characters)*/

// QUESTION 8
// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// ANSWER

/*function distanceInKilometer() {
    document.write("<h1>Distance Convertor</h1>")
  let userInput = Number(
    prompt(
      "Enter a distance(km) between two cities \nfind the dstance in \nMeter, \nFeet, \nInches, \nCentimeters"
    )
  );
  let meterConversion = userInput * 1000;
  document.write(
    "<h4>Distance in Kilometer:</h4>", userInput , "km", "<h4>Kilometer into Meter:</h4>", meterConversion , "m");

  function distanceInFeet() {
    let feetConversion = userInput * 3280.84;
    document.write("<h4>Kilometer into Feet:</h4>", feetConversion , "ft");
  }
  distanceInFeet();

  function distanceInInches() {
    let inchesConversion = userInput * 39370.1;
    document.write("<h4>Kilometer into Inches:</h4>", inchesConversion , "in");
  }
  distanceInInches();

  function distanceInCentimeters() {
    let centimeterConversion = userInput * 100000;
    document.write("<h4>Kilometer into Centimeters:</h4>", centimeterConversion , "cm");
  }
  distanceInCentimeters();
}

distanceInKilometer();*/

// QUESTION 9
// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// ANSWER

/*let workingHours = Number(prompt("Enter your overtime hours"))

let overTime , overTimePay

let overTimePerHourPay = 12

if(workingHours > 40){
  overTime = workingHours - 40
  overTimePay = overTime * overTimePerHourPay
  alert("Your overtime pay is " + overTimePay + " PKR")
}
else{alert("You need to do work hard")}*/

// QUESTION 10
// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// ANSWER

/*let userAmount = 540

let hundredRsNotes = parseInt(userAmount / 100)

userAmount = userAmount - (hundredRsNotes * 100)

let fiftyRsNotes = parseInt(userAmount / 50)

userAmount = userAmount - (fiftyRsNotes * 50)

let tenRsNotes = parseInt(userAmount / 10)

userAmount = userAmount - (tenRsNotes * 10)

document.write("<h1>Amount Withdrawer</h1>" , "<h4>Volume of Hundred Rs Notes:</h4>" , hundredRsNotes , " Currency notes" , 
  "<h4>Volume of Fifty Rs Notes:</h4>" , fiftyRsNotes , " Currency notes" , "<h4>Volume of Ten Rs Notes:</h4>" , tenRsNotes , " Currency notes")*/