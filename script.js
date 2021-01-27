//Iphone eleven 
const firstAddition = document.getElementById("add");
const firstDeletion = document.getElementById("remove")
const firstNumber = document.getElementById("firstNumber");
const firstInput = document.getElementById("input_value");

//Iphone case  
const secondAddition = document.getElementById("secondAdd");
const secondDeletion = document.getElementById("secondRemove");
const secondNumber = document.getElementById("secondNumber");
const secondInput = document.getElementById("secoundInput");

//Total variables
let total = document.getElementById("total");
let sub_total = document.getElementById("sub_total");

//Adding Iphone
firstAddition.addEventListener("click",function(){
    let num =add(firstInput,1219,firstNumber);
    let currentSub = parseInt(num.innerText);
    sub_total.innerText = currentSub;
})

//Adding case 
secondAddition.addEventListener("click",function(){
    let sum = add(secondInput,59,secondNumber)
    let currentSub = parseInt(sum.innerText);
    sub_total.innerText = currentSub;
})


//removing iphone 
firstDeletion.addEventListener("click",function(){
   let num = remove(firstInput,1219,firstNumber);
   let currentSub = parseInt(num.innerText);
    sub_total.innerText = currentSub;
})

//removing iphone case
secondDeletion.addEventListener("click",function(){
  let num =  remove(secondInput,59,secondNumber);
   let currentSub = parseInt(num.innerText);
    sub_total.innerText = currentSub;
})


function add(input_value,dam,number){
    let InitialCount = parseInt(input_value.value);
    let currentCount = parseInt(InitialCount + 1);
    input_value.value = currentCount;
    let price = parseInt(dam);
    let initialPrice = parseInt(number.innerText);
    let currentPrice = price + initialPrice;
    number.innerText = currentPrice;
    return number;
}

function remove(input_value,dam,number){
    let InitialCount = parseInt(input_value.value);
    let currentCount = parseInt(InitialCount - 1);
    input_value.value = currentCount;
    let price = parseInt(dam);
    let initialPrice = parseInt(number.innerText);
    let currentPrice = initialPrice -price;
    number.innerText = currentPrice;
    return number;
}

// function subTotal (){
//     sub_total.innerText = 
// }

//Removing 


// sub_total
//   // //subtotal
//     // let currentSubTotal = parseInt(sub_total.innerText);
//     // let finalSubTotal =  currentPrice;
//     // sub_total.innerText = finalSubTotal;

//  //subtotal
//  let currentSubTotal = parseInt(sub_total.innerText);
//  let finalSubTotal =  currentPrice;
//  sub_total.innerText = finalSubTotal;
