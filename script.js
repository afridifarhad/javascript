
// let a = 100;
// let b = 200;

// if(a > b){
//     console.log("your are seclected")
// }
// else{
//     console.log("sorry")
// }


// num1 = Number(prompt("enter a number"))
// num2 = Number(prompt("enter a second number"))

// if(num1 < num2){
//     console.log("successfully")

// }
// else{
//     console.log("error")
// }
// console.log(typeof num1)
// console.log(typeof num2)


// let username = prompt("enter your full name")
// if(username.length < 10){
//     console.log("your name under 10 character")
// }
// else{
//     console.log("your name character greater then 10")
// }
// console.log(typeof username)


// let a = 10
// let b = 20
 
// if(a > b){
//     console.log("true")
// }
// else{
//     console.log(false)
// }
// console.log(typeof a)
// console.log(typeof b)


// let num1 = prompt("Enter first number")
// let num2 = prompt("Enter sencond number")

// if(num1 > num2){
//     console.log("num1 is greater than num2")
// }
// else{
//     console.log("num2 is greater than num1")
// }

// let institute = prompt("Instittue Name")
// let student_name = prompt("Name")
// let course = prompt("Course")
// let days = prompt("Days")
// let contact = prompt("Contact")
// let batch = prompt("Batch Number")

// let card = `
//              Sylani Mass IT Training Program
//             ____________________
//              STUDENT IDENTITY CARD

//       Name: ${student_name}       
//       course: ${course}
//       Days: ${days}
//       Contact: ${contact}
//       Batch: ${batch}

    
// `
// alert(card)

/////////// control flow ///////////////

// let age = prompt("Apki age kia hy")

// if(age >= 60){
//     alert("you are a senior citizen")
// }
// else if(age >= 40){
//     alert("your are Adult")

// }
// else if(age >= 25){
//     alert("your are Young")
// }
// else if(age >= 13){
//     alert("your are Teenager")
// }
// else if(age >= 1){
//     alert("you are kid")
// }
// else{
//     alert("you are Toodler")
// }




// let percentage = prompt ("Enter your Marks")
// let grade = " "
// if(percentage >= 90){
//     grade = "A+"
// }
// else if(percentage >= 80){
//     grade ="B"
// }
// else if(percentage >= 60){
//     grade = "C"
// }
// else if(percentage >= 50){
//     grade = "D+"
// }
// else if(percentage >= 1){
//     grade = "F"
// }
// else{
//     grade = "Entr the Marks"
// }
// alert(`Your Grade is ${grade}`)

let purchase_amount = prompt("Enter your purchase Amount")
let purchase = " "
if(purchase_amount >= 50000){
    purchase = "20%"
}
else if(purchase_amount >= 40000){
    purchase = "15%"
}
else if(purchase_amount >= 30000){
    purchase = "12%"
}
else if(purchase_amount >= 20000){
    purchase = "10%"
}
else if(purchase_amount >= 15000){
    purchase = "5%"
}
else if(purchase_amount >= 10000){
    purchase = "2%"
}
else{
    purchase = "0%"
}
alert(`Your Discount is ${purchase}`)