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