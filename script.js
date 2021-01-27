//first button
const firstAddition = document.getElementById("add");
const firstDeletion = document.getElementById("remove")
const firstNumber = document.getElementById("firstNumber");
let total = document.getElementById("total");
let input_value = document.getElementById("input_value");


//lagibu

//Adding Iphone
firstAddition.addEventListener("click",function(){
    let InitialCount = parseInt(input_value.value);
    let currentCount = parseInt(InitialCount + 1);
    input_value.value = currentCount;
    let iphoneElevenPrice = parseInt(1219);
    let initialPrice = parseInt(firstNumber.innerText);
    let currentPrice = iphoneElevenPrice + initialPrice;
    firstNumber.innerText = currentPrice;

    //subtotal
    

})
//Removing iphone
firstDeletion.addEventListener("click",function(){
    let InitialCount = parseInt(input_value.value);
    let currentCount = parseInt(InitialCount - 1);
    input_value.value = currentCount;
    let iphoneElevenPrice = parseInt(1219);
    let initialPrice = parseInt(firstNumber.innerText);
    let currentPrice = initialPrice -iphoneElevenPrice;
    firstNumber.innerText = currentPrice;
})

