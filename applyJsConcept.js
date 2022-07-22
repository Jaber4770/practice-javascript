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
console.log(moonUP);


// inch to feet convert____inch to feet convert____inch to feet convert____

function inchToFeet(inch){
    let feet = inch / 12;
    return feet;
}


let inch = 150;
let feetResult = inchToFeet(inch);
let integerNumber = feetResult.toFixed(2);
console.log(integerNumber,"Feet");



// Mile to Kilo Meter______Mile to Kilo Meter______Mile to Kilo Meter______

function mileToKM(mile){
    let Kilometer = mile * 1.60934;
    return Kilometer;
}

let mile = 20;
let getKmResult = mileToKM(mile);
let getFinalKmResult = getKmResult.toFixed(2);
console.log(getFinalKmResult,"km");