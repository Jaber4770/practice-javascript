// let's start applying js conecpt
// cheing moon up or not



function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}


let checkTime = 21;
let moonUP = isMoonUp(checkTime);
console.log("Is moon up:", moonUP);

// next
function IsMoon_up(time) {
    if (time >= 19 || time <= 5) {
        return true;
    }
    return false
}

let checkingTimg = 12;
let moonUp = IsMoon_up(checkingTimg);
console.log("Is moon up? Ans:", moonUp);








// inch to feet convert____inch to feet convert____inch to feet convert____

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}

let inch = 150;
let feetResult = inchToFeet(inch);
let integerNumber = feetResult.toFixed(2);
console.log(integerNumber, "Feet");


// next

function inchtofeet (inch){
    let feet = inch/12;
    return feet;
}

let sendinginch = 12;
let getingresult = inchtofeet(sendinginch);
console.log("your result in feet is:",getingresult);





// Mile to Kilo Meter______Mile to Kilo Meter______Mile to Kilo Meter______

function mileToKM(mile) {
    let Kilometer = mile * 1.60934;
    return Kilometer;
}

let mile = 20;
let getKmResult = mileToKM(mile);
let getFinalKmResult = getKmResult.toFixed(2);
console.log(getFinalKmResult, "km");

//cheking odd or even number____cheking odd or even number____cheking odd or even number

// even number checking___even number checking___

function evenNumChecker(naturalNumber) {
    if (naturalNumber % 2 == 0) {
        return true;
    }
    return false;
}


let nturlNumber = 20;
let getEvenNum = evenNumChecker(nturlNumber);
console.log("Even Number:", getEvenNum);



// cheking odd number____cheking odd number____cheking odd number


function getOddNum(naturlNumber) {
    if (naturlNumber % 2 != 0) {
        return true;
    }
    return false;
}


let naturalNum = 51;
let getOddReult = getOddNum(naturalNum);
console.log("Odd Number:", getOddReult);


// chekig leep year______chekig leep year______chekig leep year______chekig leep year

// Basic leep year cheking programm:

function isLeepYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

let checkigYear = 2016;
let getLeepYear = isLeepYear(checkigYear);
console.log(checkigYear, "leep year:", getLeepYear);



// Proper way to check leep year:

function isMyYearLeepYear(checkingYear) {
    if (((checkingYear % 4 == 0) && (checkingYear % 100 != 0)) || (checkingYear % 400 == 0)) {
        console.log(checkingYear, "is a leep year");
    }
    else {
        console.log(checkingYear, "is not a leep year");
    }
}

let myYearIs = 2023;
isMyYearLeepYear(myYearIs);


// Factorial____Factorial____Factorial____Factorial____Factorial____Factorial____Factorial


let factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log("factorial number is:", factorial);

// next

let factorialnumber = 1;
for(let i = 1; i<5; i++){
    factorialnumber = factorialnumber * 1;
}

console.log("factorial of 5 is:", factorialnumber);

// Factorial with function____Factorial with function____Factorial with function____

// factorial with incremental

function getFactorial(numbers) {
    let factorialNumber = 1;
    for (let i = 1; i <= numbers; i++) {
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber;
}


let countNumOfFactorial = 7;
let getFacotialResult = getFactorial(countNumOfFactorial);
console.log("Factorial of", countNumOfFactorial, "is", getFacotialResult);


// factorial with decremental

function DecremenalFactorial(factoNumber) {
    let factorialNUm = 1;
    let i = factoNumber;
    while (i >= 1) {
        factorialNUm = factorialNUm * i;
        i--;
    }
    return factorialNUm;
}


let sendNum = 5;
let getDecrementalResult = DecremenalFactorial(sendNum);
console.log("decremental factorial of", sendNum, "is", getDecrementalResult);


// Factorial Recursion____Factorial Recursion____Factorial Recursion____
// i will avoid the recursion on js

function sum(n) {
    if (n == 0) {
        return 0;
    }
    else {
        return sum(n - 1) + n;
    }
}

console.log("factorial with recursion is:", sum(3))

// proper and alternative of js recursion
// the formula is ((n*(n+1))/2)

let n = 100000;
console.log("without recusion but easy way to get result is:", (n * (n + 1)) / 2);





// celciuse to fahrenheit______celciuse to fahrenheit______celciuse to fahrenheit______



function celToFarenheit(celciuse) {
    textToNum = parseFloat(celciuse);
    let fahrenheit = textToNum * 9 / 5 + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return fahrenheit;
}

let celciuseScale = 500;
let getFahrenheitResult = celToFarenheit(celciuseScale);
console.log("Your converted result is:", getFahrenheitResult, "F");


// Fahrenheit to celcius____Fahrenheit to celcius____Fahrenheit to celcius____


function fahrenheitToCelcius(fahrenheitNumber) {
    let convertTextToNum = parseFloat(fahrenheitNumber);
    let getCelcius = (convertTextToNum - 32) * 5 / 9;
    getCelcius = getCelcius.toFixed(2);
    return getCelcius;
}

let checkFahrenheitNumber = 98;
let getCelciusResult = fahrenheitToCelcius(checkFahrenheitNumber);
console.log(getCelciusResult);



// Grade in exam_____Grade in exam_____Grade in exam_____Grade in exam_____Grade in exam

// Letter grade;

function ExamGrade(marks) {
    if (marks >= 100) {
        console.log("Exam marks can not be more than 100");
    }
    else if (marks <= 0) {
        console.log("Exam marks can not be less than 0");
    }
    else if (marks >= 80 && marks <= 100) {
        console.log("You got A+");
    }
    else if (marks >= 70 && marks <= 79) {
        console.log("You got A");

    }
    else if (marks >= 60 && marks <= 69) {
        console.log("You got A-");

    }
    else if (marks >= 50 && marks <= 59) {
        console.log("You got B");

    }
    else if (marks >= 40 && marks <= 49) {
        console.log("You got C");

    }
    else if (marks >= 33 && marks <= 39) {
        console.log("You got D");

    }
    else if (marks >= 0 && marks <= 32) {
        console.log("you got Fail")
    }
    else {
        console.log("You didn't attend in the exam");
    }
}


let studentMarks = 95;
ExamGrade(studentMarks);


// Bank interest_____Bank interest_____Bank interest_____Bank interest_____Bank interest

// simple way to calculate interest of bank:

function bankInterest(principle, time, rate) {
    let getInterest = ((principle * time * rate) / 100)
    return getInterest;
}

let principle = 100000;
// time is count yearly
let time = 1;
let rate = 10;
let getInterestResult = bankInterest(principle, time, rate);
console.log("Get your interest of", principle, "is", getInterestResult);


// Math______Math______Math______Math______Math______Math______Math______Math______Math


// Math.max() & Math.min()_______Math.max() & Math.min():


let mathNumber = [23, 34, 45, 56, 67, 78, 65, 5433432, 434, 45, 4, 65, 6, 565];
let bigNumber = Math.max(...mathNumber);
console.log("Largest number in the array is:", bigNumber);

console.log("largest number:", Math.max(23, 34, 454, 565))
let lowestNumber = Math.min(...mathNumber);
console.log("the lowest number in array is:", lowestNumber);



// making positive numbe of any number:
// math.abs():
let NegativeNumber = [-23, -34, -45, -56, -67, -78, -65, -6, -5];
console.log("making positive number from negative number of an array:", Math.abs(...NegativeNumber));



// math ceil

let checMathNumber = 4.5433;
let checkCeilNum = Math.ceil(checMathNumber);
console.log(checkCeilNum);

// math floor

let checkFloorNum = Math.floor(checMathNumber);
console.log(checkFloorNum);


// math round
let roundNumber = 44.4534;
let checkRound = Math.round(roundNumber);
console.log(checkRound);


// ge random number










