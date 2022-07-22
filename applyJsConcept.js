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
console.log(checkigYear, "leep year:",getLeepYear);



// Proper way to check leep year:

function isMyYearLeepYear (checkingYear){
    if((checkingYear % 4 == 0) && ( checkingYear % 100 != 0) || (checkingYear % 400 == 0)){
        console.log(checkingYear, "is a leep year");
    }
    else{
        console.log(checkingYear, "is not a leep year");
    }
}

let myYearIs = 2023;
isMyYearLeepYear(myYearIs);

















