//1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log( myString);//hello,this,is,a,difficult,to,read,sentence
console.log(myString.length);   //42
console.log(myString.replace(/[,]/g,' '));   //hello this is a difficult to read sentence

//2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);// (4) ["blowfish", "capricorn", "giraffe", "turtle"]
favoriteAnimals.splice(1,0,'meerkat');
console.log('The new value of the array is ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]');//The new value of the array is ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]
console.log(favoriteAnimals); // (5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]
console.log('The array has length of '+ favoriteAnimals.length); //The array has length of 5
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals); // (4) ["blowfish", "meerkat", "capricorn", "turtle"]
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf('meerkat'));  //The item you are looking for is at index: 1


// More JavaScript!

// 1.
const addXYZ= (x,y,z)=> {
    const a=x+y+z;
    return a;
}
console.log('The result is : ' + addXYZ(4,5,6));// 'The result is : 15

//2.
const colorCar= (color)=> {
    console.log('a ' + color + ' car');
}
colorCar('red');//a red car


//3.
let myObject = { Name: 'Dell', 
              age: 40,
              address: 'malmo' };
    console.log(Object.values(myObject)); //["Dell", 40, "malmo"]
    console.log(Object.getOwnPropertyNames(myObject)); //["Name", "age", "address"]


//4.
const vehicleType = (color,code)=> {
if(code == 1) {
    console.log ("a " + color + " car");
} else   {
    console.log("a " + color + " motorbike");
}
}
vehicleType("blue",2);

//5.
console.log(3 === 3); // true
console.log(3 === 4); // false

//6.

const vehicle= (color,code,age) => { 
    if (age>0){
        if(code==1){
            console.log ("a "+ color +" "+ "used "+ "car")
         } else if (code == 2){
            console.log ("a "+ color +" "+ "used "+ "motorbike")   
         }
        
    }

}
vehicle("red",1,5); //a red used car
vehicle("blue",2,1);//a blue used motorbike

//7.
let vehicle = ["motorbike", "caravan", "bike"];

//8.
console.log(vehicle[2]); //bike

//9.
const vehicle=(color, code, age) => {
    if(code == 1 && age <= 1) {
        console.log("a"+ " "+color+ " "+ "used"+ " "+ "motorbike");
    }
    else if(code ==1 && age<= 1){
        console.log("a"+ " "+ color + " "+ "caravan");
    } else {
        console.log("a"+ " "+ color+ " "+ "new"+ " "+ "bike");
    }
}
vehicle("green", 3, 1); //a green new bike  

//10
let adv = "Amazing Joe's Garage, we service car, motorbikes, caravans and bikes.";
for (let i = 0; i < adv.length; i++) {
    console.log(adv);
  } //Amazing Joe's Garage, we service car, motorbikes, caravans and bikes.

//12.
const emptyObject = {};
console.log(emptyObject);

//13.
let teachers = {
    fahdi: { module: "Javascript"},
    tommy: { module: "html"},
    bara: {module: "web-developer"},
    Marco:{ module:"javascript"}
}
console.log(teachers.bara.module);//web-developer
//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x === y); //false because x and y does not refer to the same reference 
console.log(x == y); //false 
console.log(z === y); // true because they have the same reference
console.log(z == x);  // false because they do not have the same reference

//16

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o3);
o2.foo = "coding";
console.log(o2);
console.log(o3);
//yes the order that  assigned (o3 = o2 or o2 = o3) matters.

//17.
let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar); //string

