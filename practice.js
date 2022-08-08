let number = 45.54;
let converted = parseInt(number);
console.log(converted);

const text = 'hello world';
const constable = true;

console.log(typeof number, typeof text, typeof constable);

let newdate = new Date();
console.log(newdate);


let floatNumber1 = 45.5434343;
let floatNumber2 = 46.5533454;

let finalNumber = floatNumber1 + floatNumber2;
console.log(finalNumber);
fixedFinalNumber = finalNumber.toFixed(2);
console.log(fixedFinalNumber);
console.log(finalNumber.toFixed(1));
console.log(parseFloat(fixedFinalNumber));
console.log(parseInt(fixedFinalNumber));


let ages = [12, 324, 343, 54, 454, 65, 65, 34];
console.log(ages.length);
console.log(ages.length);

console.log(ages);
console.log(ages.indexOf(324));
console.log(ages.indexOf(12));

console.log(ages.indexOf(23434));
console.log(ages[2]);
console.log(ages[3]);

let ages1 = [12, 324, 343, 54, 454, 65, 65, 34];

ages1[1] = 50;
console.log(ages1);

ages1[5] = 50;
console.log(ages1);

ages1.push('jalani');
console.log(ages1);
ages1.push('jalani1');
console.log(ages1);
// keep last removed variable on anothe variable and show it;
const getPop = ages1.pop();
console.log(getPop);
console.log(ages1);

// keep first removed item on another variable;
const firstItemRemove = ages1.shift();
console.log(firstItemRemove);
console.log(ages1);

// add any value in the first of the array;
ages1.unshift('song');
console.log(ages1);

// Comparision Comparision Comparision Comparision Comparision Comparision Comparision


console.log(5 > 4);
console.log(5 < 4);
console.log(5 == 5);
console.log(4 != 4);
console.log(5 != 6);


// condition condition condition
let job = true;
let money = 100000;
let roast = 50;
let salary = 50000
if (money < roast) {
    console.log("I will eat roast with sos");
}
else if (money > roast) {
    console.log('let eat some roast');
}
else {
    console.log("Roast is very bad for our health");
}


const dummyText = "the quick brown fox jumps over the lazy dog.";
const dummyText2 = "the quick brown fox jumps over the lazy dog.";


// and condition
if ((job == true) && (money > roast)) {
    console.log("tor kopale biya ase");
}
else {
    console.log("tor kopale biya nai");
}


// or condition
if ((job == false) || (money < roast)) {
    console.log("tor kopale biya ase");
}
else {
    console.log("tor kopale biya nai");
}

// multiple condition

if (((job == true) && (money > salary)) && (roast < salary)) {
    console.log('yes! you can now marry');
}
else {
    console.log("No! No! you can't marry now! wait for few yeas!");
}


if (((job == false) && (money > salary)) || (roast > salary)) {
    console.log('yes! you can now marry');
}
else {
    console.log("No! No! you can't marry now! wait for few yeas!");
}

// Nested condition

let danishPrice = 20;
let myBudget = 25;
let wellPacked = true;

if (danishPrice < myBudget) {
    if (wellPacked == true) {
        console.log("Danish Khabo");
    }
    else {
        console.log("Danish Khabo na");
    }
}



// less equel or greter equel

if (danishPrice <= myBudget) {
    if (wellPacked == true) {
        console.log('Danish khabo-1');
    }
    else {
        console.log("Danish Khabo na!")
    }
}

if (money >= job) {
    console.log("Yes! You can travel!");
}
else {
    console.log("Not suficient balance! No! you can not travel now!")
}



//  while loop while loop while loop while loop while loop while loop while loop 


let roastGiven = 1;
while (roastGiven <= 5) {
    console.log("Mama Roast den!", roastGiven);
    roastGiven++;
}


let vaccineGiven = 0;
while (vaccineGiven <= 6) {
    console.log("Sir, Vaccine den", vaccineGiven);
    vaccineGiven++;
}

let numbers = 0;
while (numbers <= 9) {
    console.log(numbers);
    numbers++;
}


// For loop, For loop,  For loop,  For loop, For loop, For loop, For loop, For loop, 

for (let biriyaniGiven = 0; biriyaniGiven <= 5; biriyaniGiven++) {
    console.log("Mama biriyani den", biriyaniGiven);
}


// short var name 
for (let i = 0; i <= 5; i++) {
    console.log("chocolate den", i);
}

// show data from an array;

let array = [12, 34, 45, 56, 67, 78, 54, 43, 32, 21];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
}


// showing data from an array!

let data = ['korim', 'jorim', 'kalo', 'dolo', 'polo'];
for (let i = 0; i < data.length; i++) {
    let getData = data[i];
    console.log(getData, i);
}


let river = ['titash', 'meghna', 'jumona', 'padma'];
for (let i = 0; i < river.length; i++) {
    let getRiverName = river[i];
    console.log(i, getRiverName);
}


// function, function,  function,  function,  function,  function, function,  function,


function turnOnFan() {
    console.log('walk towards the fan');
    console.log('turn on the switch');
}

turnOnFan();


// singara buying function;

function bringSingara(givenMoney) {
    console.log('singara kenar jonno', givenMoney, "tk dise");
    console.log("mama singara den");
}

bringSingara(50);


// another function

function rickshaw(vara) {
    console.log("oi rickshaw", vara, "tk dimo, city center jaiba?");
    console.log("bhai ekto baraiya diyen cholen");
}

let rickshawVara = 30;
rickshaw(rickshawVara);



// function with Return----function with Return---function with Return


function buyingSingara(tk) {
    console.log("Singara kenar jonno", tk, "tk dise")
    console.log("Uncle singara den");
    let singaraPrice = 10;
    let singaraQuantity = tk / singaraPrice;
    return singaraQuantity;
}

let singaraKenarTk = 100;
let getSingara = buyingSingara(singaraKenarTk);
console.log("Singara kinte parsi", getSingara, " ta");



// multiple perameter----multiple perameter----multiple perameter----


function multiplePera(perameter1, perameter2) {
    let sumOfPera = perameter1 + perameter2;
    console.log(perameter1, perameter2)
    return sumOfPera;
}

let pera1 = 60;
let pera2 = 40;
let resultOfFunction = multiplePera(pera1, pera2);
console.log(resultOfFunction);


// object____object____object____object____object____object____object____object____object

let computerSpecification = {
    ram: '8GB',
    color: 'black',
    storage: '240GB',
    gen: '4th gen'
}
console.log(computerSpecification);


// next object

let pcPrice = {
    monitor: '2300tk',
    Pc: '23k',
    mouse: '350tk',
    keyboard: '700tk',
    speaker: '500tk',
    wifi_reciver: '450tk',
    wifi: '2k tk',
    number: 45
}

console.log(pcPrice);
console.log(pcPrice.Pc);

pcPrice.Pc = '24k';
console.log(pcPrice);


// Switch___Switch___Switch___Switch___Switch___Switch___Switch___Switch___Switch___Switch

let color = "red";
switch (color) {
    case 'blue':
        console.log("the color is blue");
        break;
    case "orange":
        console.log("the color is orange");
        break;
    case "yeallow":
        console.log("the color is yeallow");
        break;
    case "red":
        console.log("the color is red");
        break;
    default:
        console.log("the color dark");
}


// next switch

let fruit = "mango";
switch (fruit) {
    case "bery":
        console.log("the fruit is bery");
        break;
    case "banana":
        console.log("the fruit is banada");
        break;
    case "mango":
        console.log("the fruit is mango");
        break;
    default:
        console.log("there is no fruit!");
}

// break___break___break___break___break___break___break___break___break___break___

let i = 1;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}


console.log("break");
// showing data from array and become stop by "break";
let fakeData = [22, 34, 546, 566, 64, 56, 43, 45, 65, 45];
for (let i = 0; i < fakeData.length; i++) {
    let dataNumber = fakeData[i];
    console.log(dataNumber);
    if (dataNumber < 100) {
        break;
    }
}

console.log("up break and down");

// showing data from array and become stop by "continue";
let fakeData2 = [22, 34, 546, 566, 64, 56, 43, 45, 65, 45];
for (let i = 0; i < fakeData2.length; i++) {
    let dataNumber = fakeData2[i];
    if (dataNumber < 100) {
        console.log(dataNumber);
        continue;
    }
    
}
// check something missing in array

let phones = ["appo", "walton", "samsung", "apple", "sony", "redmi", "realme", "vivo", "oneplus"];
if(phones.indexOf("lg") == -1){
    console.log("lg is missing");
}