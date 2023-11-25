// function add(){

//     var a=Calculator.getElementById("number1").value;
//     var b=Calculator.getElementById("number2").value;

//     var c=parseInt(a)+parseInt(b);
//     var c=Calculator.getElementById("answer").value=c;
// }
// function sub(){

//     var a=Calculator.getElementById("number1").value;
//     var b=Calculator.getElementById("number2").value;

//     var c=parseInt(a)-parseInt(b);
//     var c=Calculator.getElementById("answer").value=c;
// }
// function mul(){

//     var a=Calculator.getElementById("number1").value;
//     var b=Calculator.getElementById("number2").value;

//     var c=parseInt(a)*parseInt(b);
//     var c=Calculator.getElementById("answer").value=c;
// }
// function div(){

//     var a=Calculator.getElementById("number1").value;
//     var b=Calculator.getElementById("number2").value;

//     var c=parseInt(a)%parseInt(b);
//     var c=Calculator.getElementById("answer").value=c;
// }
// function 1(){
//     var a=Calculator.getElementById("1").value;
// }
// function 2(){
//     var a=Calculator.getElementById("2").value;
// }
// function 3(){
//     var a=Calculator.getElementById("3").value;
// }
// function 4(){
//     var a=Calculator.getElementById("4").value;
// }
// function 5(){
//     var a=Calculator.getElementById("5").value;
// }
// function 6(){
//     var a=Calculator.getElementById("6").value;
// }
// function 7(){
//     var a=Calculator.getElementById("7").value;
// }
// function 8(){
//     var a=Calculator.getElementById("8").value;
// }
// function 9(){
//     var a=Calculator.getElementById("9").value;
// }
// function 0(){
//     var a=Calculator.getElementById("0").value;
// }
// function dot(){
//     var a=Calculator.getElementById(".").value;
// }
function equation(val){
document.getElementById("result").value+=val;
}
function calculation(val){
var a= document.getElementById("result").value;
var c=eval(a)
document.getElementById("result").value=c;
}
function clear(val){
document.getElementById("clear").value=" ";
}
