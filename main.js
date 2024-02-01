// Variables and Conditionals:

//1-1 Create a variable to store your age. Write a conditional 
//statement to check if you are old enough to vote (age >= 18), and log a message accordingly.

var myAge= 18;

function canVote(age){
    if (age>=18) {
        console.log("you are allowed to vote");
    } else{
    console.log("you are not allowed to vote");
    }
}

canVote(myAge);

//1-2 Write a program that prompts the user for their name.
//If the name is "John," log "Hello, John!" to the console; otherwise, log "You are not John."

var johnName= "John"
var firstName= window.prompt (" What is Your First Name ?");
if (firstName === johnName) {
    console.log("Hello John !");
} else {
    console.log("you are not John !");
}


// Function :

//2-1 Write a function that takes two numbers as parameters and returns their sum.
// Call the function with different numbers to test it.

function addNum(num_1,num_2) {
    return num_1+num_2;
}

console.log(addNum(10,10));

//2-2
////////////
///////////
//////////


//3 - Arrays and Loops:

//3-1 Create an array of your favorite fruits. Use a `for` loop to log each fruit to the console.

var favFruit=['Peers', 'Apple','Orange','Banana']
function showFruit() {
    for (let index = 0; index < favFruit.length; index++) {
    console.log(favFruit[index]);   
}
}
showFruit()

// 3-2 Write a function that takes an array of numbers as a parameter and returns the average of those numbers.

var averageNum=[1,2,3,4,5];

function getAverage(averageNum) {
   for (let index = 0; index < averageNum.length; index++) {
    var avverage = 15/averageNum.length;
    return avverage;
    // console.log(averageNum[index]);
    
   } 
}

var result = getAverage(averageNum);
console.log(result);
// getAverage(averageNum)



// 3-3 Given an array of numbers, use a loop to find and log the largest number in the array.
                                //NOT FINISHED

var largestNum = [10,20,40,10];
var largest_Num = largestNum[0];
for (let index = 1; index < largestNum.length; index++) {
    if (largestNum[index]<= largest_Num) {
        console.log("The largest # is" + largestNum[index]);
    } 
}


// 3-4 Create an array of words. Use a `for` loop to construct a sentence
// by concatenating these words and log it to the console.

var wordsArray = ['I', 'am','Suffering', 'from', 'JavaScript']
console.log(wordsArray.join(' '));



// 3-5 Write a function that takes an array of names and a name as a parameter.
// The function should check if the given name exists in the array and return true or false.

let talNames = ['Basem','Hamza','Butul','Ahmed','Amjad','Nabaz'];
let userMSg = prompt("pleas write the name that you what to check");
    function existednames(talNames, userMSg) {
    for (let i = 0; i <= talNames.length; i++) {
        if (userMSg === talNames[i]) {
        return true;
        }
    }
    return false;
    }
console.log(existednames(talNames, userMSg.toUpperCase()));

// 3-6 Create an array of even numbers from 1 to 20 using a `for` loop and the `if` statement.
// Log the resulting array to the console.
//NOT FINISHED 

let evenarry=[];
for (let i=0; i<=20; i++)
    {
    if (i % 2 === 0){
        console.log([i]);
    }
    }

//4- Objects:
// 4-1 Create an object representing a book with properties like title, author, and year. 
//Print the book's details to the console.

var book={
    title: 'How to code',
    author: 'Matrix Master',
    year:2020
}

console.log("The Book object Information is :","The title is",book.title,"-","The author is",book.author,"and","The year is",book.year);

// 4-2 Define an object to represent a person with properties like name, age, and gender. 
//Create a function that takes a person's object
// as a parameter and prints a message with their information.

var person={
    personName:"basem",
    personGender:"Male",
    personAge:"32",

};

function personInformation(a,b,c){

    console.log(person.personName(a,b,c));
}

console.log("The person name is: "+person.personName, "-","The person gender is :",person.personGender,"-","the person age is"+"",person.personAge);

//5- 1 Objects as Classes:
//Create an object that simulates a class representing a car with properties
// like make, model, and year. Add a method to start the car.

var cars={
    make:"",
    model:"",
    year: "",

    carEngine:function(){
    return"Car is started !"
    }

}

/// 5-2vExtend the previous car class object with a method to drive the car.
// Print a message when you start and drive the car instance.

var driving = Object.create(cars);
console.log(driving.carEngine());

//6- Window Object:
// 6-1 Use the `window.alert` method to display an alert dialog 
//with a message of your choice when a button is clicked on a webpage

let numberArray=[];
for (let index=0; index<=20; index++)
    {
    if (index% 2 === 0){
        console.log([index]);
    }
    }

var alertmsg= document.getElementById('alertMessage');

alertmsg.addEventListener("click",function(){
    window.alert("Hello Alert !")
})


// 6-2 Create a function that uses `window.prompt` to 
//ask the user for their name, then use `window.alert` to greet them with their name.

var yourName =window.prompt("Enter your name")
console.log("Hello "+yourName);

// 7-DOM Manipulation:
// 7-1
// Create an HTML page with a button and a div element. Write a JavaScript function that
//  changes the text content of the div when the button is clicked.

var divText= document.getElementById("text");
var divScndBtn= document.getElementById('scnd-btn');

divScndBtn.addEventListener("click", function(){
divText.textContent = "OOPS ! I am changed " ;
});

// 7-2 In an HTML page, create a list of items (e.g., a to-do list) using an unordered list (`<ul>`) and list items (`<li>`). 
//Write JavaScript to add a new item to the list when a button is clicked.


function newItem(){  // 1)First, we create the function that make us create the new item in the list
    var item=document.createElement("li"); // document.creatElement is used to create new html element (here you put what is the type of the element p, div, li) 
    item.textContent="pray";
    var toDoList = document.getElementById('to-do-list');
    toDoList.appendChild(item);
}

var addToListBtn = document.getElementById("thrd-btn")
addToListBtn.addEventListener("click", function(){
    newItem()
    });
    

    //7-3 Create a web page with an image and a button.
    // Write JavaScript to change the image source when the button is clicked.

    var googleImg= document.getElementById('google-img');
    var googlBtn= document.getElementById('google-btn');

    googlBtn.addEventListener("click", function(){
    changeImg() ;
        });

    function changeImg(){
        googleImg.src = "apple.png";
    }

    //7-4 Build an interactive form in HTML (e.g., a simple login form) with input fields for username and password.
    // Write JavaScript to validate the form when submitted. 
    //Display a message based on whether the login was successful or not.

    
    var submitBtn= document.getElementById('submit-form');

    

    submitBtn.addEventListener('click',function(){
        submitForm();
    })

function submitForm(){
    var userName= document.getElementById('user-name').value;
    var userPass= document.getElementById('user-pas').value;

    var userName1 = "Basem";
    var password1 = "123456"; // changeed it to string!

if (userName === userName1 &&    userPass === password1 ){
    alert ('Success');
}else {
alert('Wrong Input enter your name and password!');
}
}
