
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


// let tables = Number(prompt("enter how many tables"))
// //outer
// for(let a=2; a<=tables; a++){
//   //inner
//   for(c=1; c<=10; c++){
//     console.log(`${a} * ${c} = ${a*c}`)
//   }
// }



// let tables = Number(prompt("Enter how many tables"));
// let a = 2;
// while (a <= tables) {
//   let c = 1;
  //   while (c <= 10) {
//     console.log(`${a} * ${c} = ${a * c}`);
//     c++;
//   }
  //   a++;
// }

 

////////////////////////////////////    Function    /////////////////////////////////////////////////


// //// declaring a function 
//  ////parameter less function 
// function addition() {
//   let a = 10
//   let b = 20
//   let c = a + b
//   console.log(c)
// }
// //// calling function
// addition();


// //// parameterised function

// function addtwovalue (a, b){
//   c = a + b
//   console.log(c)
// }
// //// value pass to a function is argument 
// addtwovalue(100, 200)
// addtwovalue(20, 50)



// function addtwovalue (a,b){
//   d = a + b
//   return d
// }
// answer = addtwovalue(10, 2);



/////write a functin that takes an array of numbers and return the array of square of the numbers/////////

// function sqaure_arr (arr){
//   sqaured = []
//   for(let a=0; a<arr.length; a++){
//     sqaured.push(arr[a]**2)
//   }
//   return sqaured
// }
// answer = sqaure_arr([2, 3, 13, 12, 4, 6, 8])
// console.log(answer)


//// write a function that calculates tax over income.
//  write a function that calculates 
// tax over income. 
// 100k >> 10%
// 50k >>  8%
// 30 >>  5%
//  15 >> 3%
//      >> 1%

// function income_tax_calc(income){ // 35000

//   if (income >=100000){
//       return income*.10
//   }
//   else{
//       if (income >=50000){
//           return income*.08
//       }
//       else{
//           if (income >=30000){
//               return income*.05
//           }
//           else{
//               if(income>=15000){
//                   return income*.03
//               }
//               else{
//                   return income*.01
//               }
//           }
//       }
//   }
  
// }

// console.log(income_tax_calc(20000))


////////////////////// switch ////////////////////////////


// let days = prompt("Enter a day").toLowerCase()

// switch(days){

//     case "saturday":
//         alert("weekend")
//         break;


//         case "sunday":
//             alert("weekend")
//             break;

//             case "monday":
//                 alert("week day")
//                 break;

//                 case "tuesday":
//                 alert("week day")
//                 break;

//                 case "wednesday":
//                     alert("week day")
//                     break;

//                     case "friday":
//                         alert("work day")
//                         break;
//             default:
//                 alert("enter valid day")
                
//}


// let date = prompt("enter the date")

// switch(date){
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//     case "9":
//     case "10":
//         alert("the date between 1 to 10")
//         break;

//         case "11":
//         case "12":
//         case "13":
//         case "14":
//         case "15":
//         case "16":
//         case "17":
//         case "18":
//         case "19":
//         case "20":
//             alert("the date between 11 to 20")
//             break;

//             case "21":
//             case "22":
//             case "23":
//             case "24":
//             case "25":
//             case "26":
//             case "27":
//             case "28":
//             case "29":
//             case "30":
        //    case "31":
        //     alert("the date between 21 to 31")
        //     break;

        //     default:
        //         alert("enter valid day")
// }


// let age = prompt("Enter your Age")

// switch(true){
//     case (age >0 && age<= 2):
//         alert("toddler")
//         break;

//         case (age >2 && age<= 13):
//             alert("Kid")
//             break;

//             case (age >13 && age<= 20):
//                 alert("Teenager")
//                 break;

//                 case (age >20 && age<= 40):
//                     alert("Young")
//                     break;

//                     case (age >40 && age<= 60):
//                         alert("Grownup Man")
//                         break;

//                         default:
//                             alert("Old Man")
// }

// var rightNow = new Date()
// alert(rightNow)

// alert(rightNow.getFullYear())
// alert(rightNow.getDate())
// alert(rightNow.getDay())
// alert(rightNow.getHours())
// alert(rightNow.getFullYear())
// alert(rightNow.getMinutes())



//////////////////////////////  Object  ////////////////////////////////////////////

// let person = {
//   name:  "afnan",
//   age: 10,
//   gender: "male"
// }
// for(i in person){
//   console.log(`${i}: ${person[i]}`)
// }


// var student = {
//   Name:)  "Nawaz Khan",
//   id:  201298,
//   age: 20,
//   address:{
//     country:  "Pakistan",
//     city: "Peshawar",
//     street_code:   220,
    
//   }
    
// }
// student.Name = "hassan khan"// update the object replace name
// student.id = 201359, // update student id 

// console.log(student.Name)
// console.log(student.id)


// let user = {
//   name: "nasir",
//   email: "nasir@gmail.com",
//   age: 30,
//   dob: new Date("july, 5, 1999"),
//   active: true
// }
// /////// update the object /////////////
// user.name = "farhad"
// user.email = "farhad@gmail.com"
// user.age = 25
// user.active = false
// ////////////  delete the object //////////////
// delete user.name
// delete user.email
// delete user.age


// for(key in user){

//    console.log(`${key}: ${user[key]}`)
// }


// let patient_1 = {id: 1, name: "khan", disease: "tb"}
// let patient_2 = {id: 114, name: "nasir", disease: "typhoid"}
// let patient_3 = {id: 1325, name: "zahoor", disease: "tb"}
// let patient_4 = {id: 1356, name: "khan", disease: "moye moye"}
// let patient_5 = {id: 1324, name: "wazir", disease: "typhoid"}
// let patient_6 = {id: 6841, name: "salman", disease: "tb"}
// let patient_7 = {id: 941, name: "haroon", disease: "moye moye"}
// let patient_8 = {id: 1, name: "qamar", disease: "typhoid"}
// let patient_9 = {id: 1241, name: "hasnain", disease: "tb"}
// let patient_10 = {id: 5121, name: "khan", disease: "tb"}


// let patients =[patient_1, patient_2, patient_3, patient_4, patient_5, patient_6, patient_7,
//   patient_8, patient_9, patient_10]


  // for(let i = 0; i < patients.length; i++){
  //   console.log(patients[i])
  // }

// for(let a=0; a<patients.length; a++){
//   for (key in patients[a]){
//     if(key=="disease"){
//       if(patients[a][key]=="moye moye"){
//         console.log(patients[a][key], patients[a]["name"])
//       }
//     }
//   }
// }


// patient_1.name = "farhad", patient_1.id = 12000, patient_1.disease = "none"

// let a = patients.push(patient => patient.name === "farhad")
// console.log(a)

// for(let i = 0; i < patients.length; i++){
//      console.log(patients[i])
//   }

////////////////////////////////////////  events ////////////////////////////////////////


// function mycode(name){

//   alert("helo world"+ " : " + name.toUpperCase())
// }

// function sum (a, b){

//   alert(a + b);
// }

// function add (num1, num2){

//   alert(num1 +  num2)
// }


// function img () {
//   alert("helo image")
// }

// function checkAddress(email) {
//   let useremail = document.getElementById(email).value
//   if (useremail === "") {
//           alert("Email address required.");
//   }
//   else{
//       document.write(`Welcome : ${useremail}`)
//   }
// }



// let emails = ['aghanhussain@gmail.com', 'shahva2022@gmail.com',
//               'farhad@gmail.com', 'cslearner@gmail.com']
// function checkAddress(email) {
//     let useremail = document.getElementById(email).value
//     if (useremail !== "") {
//         if (emails.includes(useremail)){

//             document.write(`Welcome: ${useremail}`)
//         }
//         else{
//             alert("Invalid Email Adrress")
//         }   
//      }
//     else{
//         alert("Email address required.");
//     }
// }


function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;

  switch (zipEntered) {

  case "60608" :
  cityName = "Chicago";
  break;

  case "68114" :
  cityName = "Omaha";
  break;

  case "53212" :
  cityName = "Milwaukee";
  break;

  default:
   cityName = "Peshawar";
   }
   
   document.getElementById("city").value = cityName;
  }

  

  function expandLoris(){
    var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
    make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
    distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
    adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
    Slow lorises have a toxic bite, a rare trait among mammals.`;
    
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
  }