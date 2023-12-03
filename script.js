
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


// let purchase_amount = prompt("Enter your purchase Amount")
// let discount = " "
// if(purchase_amount >= 50000){
//     discount = "20%"
// }
// else if(purchase_amount >= 40000){
//     discount = "15%"
// }
// else if(purchase_amount >= 30000){
//     discount = "12%"
// }
// else if(purchase_amount >= 20000){
//     discount = "10%"
// }
// else if(purchase_amount >= 15000){
//     discount = "5%"
// }
// else if(purchase_amount >= 10000){
//     discount = "2%"
// }
// else{
//     discount = "0%"
// }
// alert(`Your Discount is ${purchase}`)

/////////////////      ARRAY  //////////////////////



// let student = ["Farhad", "Adil", "Salman", "Nasir"]

// console.log(student[3])

// console.log(student.pop())


// console.log(student.splice(1,0,"jawad"))
// console.log(student.push("A", "B", "C", "D"))

// console.log(student.unshift(12, 234,"wazir khan","jawad alam khan shah"))
// console.log(student.shift())
// console.log(student)
// console.log(student.slice(2,7))




///////////////////////////// LOOP //////////////////////////////////////////////

// for (let a=0; a<10; a++){
//   console.log(a, "Nasir Hussain")
// }

// for (let a=0; a<=10; a=a+2){
//   console.log(a,"Pakistan")
// }

 //let friends = ["Ali", "Nawaz", "Adil", "Afnan", "Zahoor", "Salman", "Farhad"]

// console.log("Hello Dear friend Mr"+" " + friends[0] + " " +"your are invited at party")
// console.log("Hello Dear friend Mr"+" " + friends[1] + " " +"your are invited at party")
// console.log("Hello Dear friend Mr"+" " + friends[2] + " " +"your are invited at party")
// console.log("Hello Dear friend Mr"+" " + friends[3] + " " +"your are invited at party")
// console.log("Hello Dear friend Mr"+" " + friends[4] + " " +"your are invited at party")
// console.log("Hello Dear friend Mr"+" " + friends[5] + " " +"your are invited at party")
// console.log("Hello Dear friend Mr"+" " + friends[6] + " " +"your are invited at party")


// for(i=0; i<friends.length; i++){
//   console.log(`Hello Dear friend Mr ${friends[i]}you are invited at the party`)
// }

// let friends = ["Ali", "Nawaz", "Adil", "afnan", "Zahoor", "Salman", "Farhad"]

// for(a=0; a<friends.length; a++){
// if(friends[a][0]=="A"){
//    console.log(`Hello Dear friend Mr ${friends[a]}you are invited at the party`)

// }
// }

// for(a=0; a<friends.length; a++){
//   if(friends[a].endsWith("r")){
//      console.log(`Hello Dear friend Mr ${friends[a]} you are invited at the party`)

//   }
// }


// for(a=0; a<friends.length; a++){
//   if(friends[a].startsWith("A") || friends[a].startsWith("a")){
//       console.log(`Hello Dear friend Mr ${friends[a]} you are invited at the party`)

//   }
// }


// let usernames = []
// for(a=0; a<5; a++){
//   let username = prompt("Enter username")
//   usernames.push(username)
// }
// console.log(usernames)


// let friend_list = []
// for(let a=0; a<5; a++){
//   let friend = prompt("Enter friends name and pree q to quit")
//   if(friend=="q"){
//     break }
//   else{
//     friend_list.push(friend)
//   }

// }
// console.log(friend_list)


///////////////////////////////////////////// While loop //////////////////////////////

// var counter = 0
// var sum = 0

// while(counter < 10)
// {
//   let number = prompt("enter a number or pree q to quit")
//   if(number != "q"){
//     sum += number
//         counter +=1
//   }
//   else{
//     break;
//   }
// }
// alert(sum)



// let sum = 0
// let flag = true
 
// while(flag)
// {
//   let number = prompt("enter a number or pree q to quit")
//   if(number != "q")
//   {
//     sum += Number(number)

//   }
//   else{
//     flag=false
//   }
// }
// alert(sum)




// let sum = 0
// var number = parseInt(prompt("Enter a number"))

// while(number > 0)


//   {
//     sum += Number(number)

//      number = parseInt(prompt("Enter a number"))
//   }
  
// alert(sum)

/////////////////////////////////// Table ////////////////////////
// let table_num = parseInt(prompt("enter table number"))
// for(let a=1; a<=10; a++){
//   console.log(`${table_num} * ${a} = ${table_num*a}`)

// }
// console.log(table_num)


//  let table_num = parseInt(prompt("enter table number"))
//  while(table_num <= 10){
//   let a = 1
//      console.log(`${table_num} * ${a} = ${table_num*a}`)

//  }


let tables = Number(prompt("enter how many tables"))
//outer
for(let a=2; a<=tables; a++){
  //inner
  for(c=1; c<=10; c++){
    console.log(`${a} * ${c} = ${a*c}`)
  }
}


