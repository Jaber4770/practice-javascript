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


// inch to feet convert____inch to feet convert____inch to feet convert____

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}


let inch = 150;
let feetResult = inchToFeet(inch);
let integerNumber = feetResult.toFixed(2);
console.log(integerNumber, "Feet");



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
    fahrenheit.toFixed(2);
    return fahrenheit;
}

let celciuseScale = 500;
let getFahrenheitResult = celToFarenheit(celciuseScale);
console.log("Your converted result is:", getFahrenheitResult, "F");







