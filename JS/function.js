console.log("Hello World")
alert("Hello World")

let a = 7
let b = 6
console.log("sum:",a+b)
console.log("difference",a-b)
console.log("product",a*b)
console.log("quotient",a/b)

let string = "25"
let num = 5

console.log(typeof string)
console.log(5)

let result =  Number(string) + num
console.log(result, typeof result)



let age = prompt("Enter your age")
if (age < 18) {
    alert("You are minor")
}else if(age <= 64){
    alert("You are an adult")
}else(alert("You are senior"))


function CalculateArea(width,height){
    let area = width*height
    console.log("Area", area)
}

if(true){
    let inside = "block scope variable";
    console.log("inside")
}
CalculateArea(5,10);

// let all = document.getElementById("all")
// let button = document.getElementById("button")


// function ToDarkMode(){
//     all.classList.toggle("darkmode")
// }
// button.onclick = ToDarkMode


// Named function to change background color
function changeBackground() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
    alert("button clicked")
}

// Named function to show alert
// function showAlert() {
//   alert("Button clicked!");
// }

// Attach functions to buttons
document.getElementById("bgBtn").onclick = changeBackground;
// document.getElementById("alertBtn").onclick = showAlert;

let ShowSidebar = document.getElementById('ShowSidebar');
let bar = document.getElementById("bar");
let closebar = document.getElementById("closebar");

function Sidebar(){
    bar.classList.add('swapdisplay')
}
ShowSidebar.onclick = Sidebar



function close(){
   bar.classList.remove('swapdisplay')
}

closebar.onclick = close

let form = document.getElementById("form")
let click = document.getElementById("click")
function sendForm(){
    alert("forms Submitted")
}
click.onclick = sendForm




