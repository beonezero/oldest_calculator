// let myInput = document.querySelector(".my-input");
// let myButton = document.querySelector(".my-button");
// let myHeader = document.querySelector(".header");

// myButton.addEventListener("click", function () {
//   myHeader.innerText = `НДС равен ${parseInt(myInput.value) * 0.2}`;
// });

let numberOne = document.querySelector(".number-one");
let numberTwo = document.querySelector(".number-two");

let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let divideButton = document.querySelector(".divide");
let multiplyButton = document.querySelector(".multiply");

let myClear = document.querySelector(".myClear");

let myHeader = document.querySelector(".header");

plusButton.addEventListener("click", function () {
  myHeader.innerText = parseInt(numberOne.value) + parseInt(numberTwo.value);
});

minusButton.addEventListener("click", function () {
  myHeader.innerText = parseInt(numberOne.value) - parseInt(numberTwo.value);
});

divideButton.addEventListener("click", function () {
  myHeader.innerText = parseInt(numberOne.value) / parseInt(numberTwo.value);
});

multiplyButton.addEventListener("click", function () {
  myHeader.innerText = parseInt(numberOne.value) * parseInt(numberTwo.value);
});

myClear.addEventListener("click", function () {
  myHeader.innerText = "";
  numberOne.value = "";
  numberTwo.value = "";
});
