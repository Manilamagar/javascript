// //object
//     // let me = {
//     //     name: "Manila Magar",
//     //     age: 21,
//     //     address: "Letang-4, Morang"
//     // }

//     // me.college= "Itahari Namuna College"
//     // me.hobby = "Reading"


//     // console.log(Object.keys(me))
//     // console.log(Object.values(me))

//     //property, method
//     //method ma jaile ni ()  huncha , property ma hunxa
//     let days = ["Sun","Mon","Tues"]
//     console.log(days.length)


//     //conditional statements
// let isRaining = true

// if(isRaining){
//     console.log("Carry Umbrella")
// }
// else{
//     console.log("Dont carry Umbrella")
// }

// //ternary operator
// isRaining ? console.log("Carry Umbrelle") : console.log("Dont carry Umbrella")


// //short circuit
// isRaining && console.log("Carry Umbrella")

// //check if age >18, you can make license,else you cannot make license
// let age =22
// if(age>=18){
//     console.log("You can Make license")
// }
// else{
//     console.log("You cannot MAke license")
// }
// age>18 ?console.log("You can Make license") : console.log("You cannot MAke license")

// age>18 && console.log("you can Make License")


// if(age>18){
//     console.log("Greater than 18")
// }else if (age>10){
//     console.log("Greater than 10 exec")
// }else{
//     console.log("Above condition was not fullfilled")
// }

// //temperature >30, "hot weather", temperature>20 "normal weather", else "Cold weather"
// let temp=30
// if (temp>30){
//     console.log("It is hot")
// }else if(temp>20){
//     console.log("It is normal weather")
// }else{
//     console.log("It is cold")
// }

// //loops
// let datas = ["Sunday","Monday","Tuseday","Wednesday"]
// console.log(datas[0])
// console.log(datas[1])
// console.log(datas[2])
// console.log(datas[3])

// for(let data of datas){
//     console.log(data)
// }

// let nums =[1,2,3,4,5]
// for(let num of nums){
//     console.log(num)
// }

// // for (let i=0;i<datas.length;i++){
// //     console.log(datas[i])
// // }

// //Today is sun
// //today is Mon
// //today is Tues
// //today is Wed

// let datass =["Sun","Mon","Tuse","Wedn"]
// for (data of datass){
//     console.log("Today is "+data)
// }

// 
let datass=[
    {
        name: "Hello",
        age:20
    },
    {
        name: "Bye",
        age: 22
    }
]
for (let data of datass){
    console.log("My name is " +data.name)
    console.log("My age is:" +data.age)
}


