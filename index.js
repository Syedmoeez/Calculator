// console.log("numbers in js") // STRINGS
var num1 = parseInt(prompt("Enter num 1 =")); // FLOAT
var num2 = parseInt(prompt("Enter num 2 =")); // INTEGERS
var num3 = parseInt(prompt("Enter num 3 ="));console.log("division = " ,num1/num2/num3);
console.log("addition = " ,num1+num2+num3);
console.log("subtraction = " ,num1-num2-num3);
console.log("multiplication = " ,num1*num2*num3);
console.log("remainder = " ,num1%num2%num3);
var add=num1+num2+num3;
var sub=num1-num2-num3;
var div=num1/num2/num3;
var mult=num1*num2*num3;
var rem=num1%num2%num3;

document.getElementById("add").innerHTML=add
document.getElementById("sub").innerHTML=sub
document.getElementById("div").innerHTML=div
document.getElementById("rem").innerHTML=rem
document.getElementById("mult").innerHTML=mult

alert("Thank you")