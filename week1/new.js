//1

console.log("Hello, World!");    //English
console.log("Namaste, Duniya!"); //Hindi
console.log("Hej varlden!");     //Swedish

//2
console.log('I\'m awesome');

//3
let x;
console.log("x : integer");
console.log(x);
x=1;
console.log ("The value of x is: a number");
console.log(x);

//4
let y = "string";
console.log("the value of y : string");
console.log(y);
y = "my string";
console.log ("the value of y changed to : my string");
console.log(y);

//5
let z =7.25;
console.log(z);
let a = Math.round(z); // or Math.ceil(z);
console.log(a);
console.log(Math.max(a,z));


//6
let animals = [];
console.log("The value of the array is null");
console.log(animals);
let mypet = [ "dog","fish"];
console.log(mypet);
mypet.push("baby pig");
console.log(mypet);

//7
let myString = "this is a test"
console.log(myString);
myString = myString.length;
console.log(myString);

//8
let number = 8; 
let string = " they are the same type"; 
let noValue = null;
let nameFieldChecked = true;
console.log(number);
console.log(string);
console.log(noValue);
console.log(nameChecked);

console.log("the type of my variable number will be: number");
console.log("the type of my variable newString will be: string");
console.log("the type of my variable noValue will be: object")
console.log("the type of my variable nameChecked will be: boolean")

typeof number; //number
typeof string;//string
typeof noValue;//object
typeof nameChecked;//boolean

console.log(number === string);//false
console.log(noValue === nameChecked); //false
console.log(number == string); //false
console.log(noValue == nameChecked);//false

//9
let x=7;
console.log(7 % 3); // answer is 1

console.log( 5 % 2); // output is 1
console.log (10 % 3); //output is 1
console.log( 4 % 2); //output is 0

//10
let mulArr = ["house", 5, "car", "red", 0];
console.log(mulArr[3]); // red

if(6 / 0 === 10 / 0) {
    console.log("Infinite");
} 
else { 
console.log("Try again");}

