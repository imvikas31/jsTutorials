// console.log("chliye suru krte hai bina kisi deri k");

//Some Inbuilt Maths' function --->>>
// Math.min()
// Returns the smallest of zero or more numbers.
// let a = Math.min(1,2,4,5);
// console.log(a);

// Math.pow()
// Returns base x to the exponent power y (that is, xy).
// let b = Math.pow(2,10);
// console.log(b);

// Math.random()
// Returns a pseudo-random number between 0 and 1.
// let c = Math.random(1.88);
// console.log(c);

// Math.round()
// Returns the value of the number x rounded to the nearest integer.
// let d = Math.round(1.88);
// console.log(d);

// Math.sign()
// Returns the sign of the x, indicating whether x is positive, negative, or zero.
// let e = Math.sign(-10.88);
// console.log(e);
// let f = Math.sign(10.88);
// console.log(f); 

//Srings:
// let firstname = "VIKAS";
// let lastName = new String("SINGH");
// console.log(typeof(firstname));    //returns string type
// console.log(typeof(lastName));     //return object type

//Typecasting: we we use dot(.) notation with primitive string it gets typecasted to Object type string.

// let Length = firstname.length;
// console.log(Length)
// console.log(firstname[0])
// console.log(firstname[1])
// console.log(firstname[2])
// console.log(firstname[3])
// console.log(firstname[4])


//to check inclision substring -->>
// let subString1 = firstname.includes("IK");   //if yes return true else false
// console.log(subString1)
// let subString2 = firstname.includes("SI");   //if yes return true else false
// console.log(subString2)

// console.log(firstname.startsWith('VI'))   //if yes return true
// console.log(firstname.endsWith('AS'))   //if yes return true
// console.log(firstname.indexOf('A'))   // return the index of the given character.
// console.log(firstname.toLocaleLowerCase())   // return the lowercase character.

//Template Literals: using template literals ,we can print any messsage as it is initialized .
// let message = `This
// is
// vikas
// singh`
// console.log(message);

//Arrays in JS as Primitive Type -->>
// let num = [1,2,3,4,5]
// //printing array:
// console.log(num)
// //print array elements at specific index:
// console.log(num[0])
// console.log(num[1])
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])

//adding element at starting: using array_name.unshift() command
// num.unshift(100)
// console.log("After adding element(say 100) at starting")
// console.log(num)

//adding element at ending: using array_name.push() command
// num.push(100)
// console.log("After adding element(say 100) at ending")
// console.log(num)

//adding element at any specific index: using array_name.splice() command
// num.splice(3,0,100)
// console.log("After adding element(say 100) at index 3")
// console.log(num)


//Check for exixtence of an element:
// let FirstName = ['v','i','k','a','s']
// if(FirstName.indexOf('I') != -1){
//     console.log("Pesent")
// }
// else{
//     console.log("Not Present")
// }

//For Better practice use includes() method:
// if(FirstName.includes('z')){
//     console.log("Pesent")
// }
// else{
//     console.log("Not Present")
// }

//Arrays in JS as Object Type -->>
let courses = [
    {no:1, fname:'vikas'},
    {no:2,lastName:'singh'}
];
// console.log(courses);
// console.log(courses.indexOf({no:1, fname:'vikas'})); //return -1;


//Searching In Object type Arrays using Callback Function:

// let course1 = courses.find( course =>
//      course.lastName == 'singh'
// )

// console.log(course1)
// let course2 = courses.find(function(course2){
//     return course2.lastName === 'singh';
// })

// console.log(course2)


//Removing From array"
let array = [1,2,3,4,5,6,7]
//from starting:
// array.shift(); 
// console.log(array);

//from ending:
// array.pop(); 
// console.log(array);

//from middle:
// array.splice(3,1); 
// console.log(array);

//Emptying an array:
let numbers = [1,2,3,4,5]
numbers2 = numbers;

//emptying an array:
// numbers.length = 0; // makes the numbers array empty;

// way ->2
numbers.splice(0 , numbers.length)
console.log(numbers)
console.log(numbers2)

//combining and slicing of arrays:
//combining --->>
let array1 = [1,2,3,4,5]
let array2 = [6,7,8]
let combined = array1.concat(array2);
console.log(combined) 

//slicing --->>
let sliced = combined.slice(2,5)
console.log(sliced) 

//Using Spread operator to combine to arrays:
let combined2 = [...array1, ...array2]
console.log(combined2)


//Using Spread operator to copy one array to another arrays:
let another = [...combined2]
console.log(another)

//Itterating in array:
//1. Using for-of loop --->>>
let num = [10,20,30,40,50]
for(let values of num){
    console.log(values)
}

//2. Using for-each loop --->>>
num.forEach(function(number){
    console.log(number)
})
