console.log("Hello, World!");
console.log("hello everyone");
console.log("Today i'm learning javascript");
console.log(1+2);



// // // variables  vanako k ho??
// // //variable is a container which holds the value.
// // let bottle = "water" //string
// // let dustbin = "waste"

// // const pi =3.14 //number
// // const bolilingPoint = 100
// // const gravity = 9.8

// // //boolean
// // let isNepali = true
// // let isIndia = false

//console.log(`i have a ${bottle} on my bottle with ${bolilingPoint} boliling point`)

// // // console.log(pi);
// // // console.log(boilingPoint);
// // // console.log(gravity);
// // // console.log(isNepali);
// // // console.log(isIndia);


// // //array
// // let friend1 ="Barsha"
// // let friend2 ="asmita"
// // let friend3 ="Sarita"

// // let friends = ["Barsha","Asmita","Sarita",]

// // let shoe1 = "Umbro"
// // let shoe2 = "nike"
// // let shoe3 = "calibar"

// let brands = ["nike","Umbro","calibar"]
// //brands.push("addidas") //last ma halxa
// //brands.unshift("addidas") //first ma halxa
// // brands.pop() //last bata remove garxa
// // brands.shift() //first bata remove garxa
// brands[1] = "Addidas" //index ma change garxa
// console.log(brands);
// //console.log(brands[0]);



// // //object
// // let name = "Manila Magar"
// // let age = 21
// // let address = "Letang-4, Morang"

// // let me = {
// //     name: "Manila Magar",
// //     age: 21,
// //     address: "Letang-4, Morang"
// // }

// // let country = "Nepal"
// // let language = "Nepali"
// // let region = "Asia"
// // let isLandLocked = true

// // let about =
// // {
// //     country: "Nepal",
// //     language: "Nepali",
// //     region: "Asia",
// //     isLandLocked: true
// // }

// let country = ["Nepal","India","Pakistan"]
// country[0] = "America"
// country[1] = "Ukraine"
// country[2] = "Russia"
// console.log(country);

// let nums = [1,2,3,4,5,6,7,8]


// //slice -->just cut only / org array lai modify garxa

// let newNums = nums.slice(1,4)
// console.log(newNums);

let even =[2,4,6,8,10,12]
let evenNums = even.slice(3,6)
console.log(evenNums);

// //splice  -->cut garxa + content halxa pani milxa / org array lai modify garxa
let nums = [1,2,3,4,5,6,7,8]
nums.splice(1,2,"Manila")
console.log(nums);

let numss = [1,2,3,4,5]
numss.splice(0,5,"a","e","i","o","u")
console.log(numss);


//split -->string lai array ma convert garxa
let message ="I am from Nepal"
let newMessage = message.split(" ")
console.log(newMessage);


let Haha ="i am from"
let newHaha = Haha.split(" ")
console.log(newHaha);


