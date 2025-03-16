// QUESTION 1
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// ANSWER

/*let a = Number(prompt("Enter the value of 'a'"))

let b = Number(prompt("Enter the value of 'b'"))

function powerRaised(a , b) {
    document.write("<h4>Value of 'a':</h4>" , a , "<h4>Power Raised:</h4>" , a*5 ,  "<br/>" , 
    "<h4>Value of 'b':</h4>" , b , "<h4>Power Raised:</h4>" , b*5)
}

powerRaised(a , b)*/

// QUESTION 2
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// ANSWER

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

// function mainFunction() {
//     let subj1 = 85

//     let subj2 = 61

//     let subj3 = 56

//     let totalNum = 300

//     let average = avr(subj1 , subj2 , subj3)

//     let percentage = per(subj1 , subj2 , subj3 ,totalNum)

//     document.write("<h4>Average:</h4>" , average , "<br/>" , "<h4>Percentage:</h4>" , percentage)

// }

// mainFunction()

// QUESTION 5
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

// ANSWER

// QUESTION 6
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// ANSWER

// QUESTION 7
// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// ANSWER

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

// QUESTION 10
// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// ANSWER
