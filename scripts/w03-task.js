/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1, num2){
    return num1 + num2;
}

const addNumbers = function(addNumber1,addNumber2){
    addNumber1 = Number(document.querySelector('#add1').value);
    addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value=add(addNumber1,addNumber2);

}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */


function subtract(num1, num2){
    return num1 - num2;
}

const subtractNumbers = function(subtract1,subtract2){
    subtract1 = Number(document.querySelector('#subtract1').value);
    subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value=subtract(subtract1,subtract2);

}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);



/* Arrow Function - Multiply Numbers */

const multiply = (factor1,factor2) => factor1 * factor2;

const multiplyNumbers = function(factor1, factor2){
    factor1 = Number(document.querySelector('#factor1').value);
    factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value=multiply(factor1,factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide2Numbers = function(num1,num2){
    return num1/num2;
}

const divideNumbers = function(dividend, divisor){
    dividend = Number(document.querySelector('#dividend').value);
    divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value=divide2Numbers(dividend,divisor);
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);



/* Decision Structure */

const discountedPrice = function(price){
    return price * 0.85;
}
function isDiscounted(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    const checkBoxMember = document.getElementById('member');
    if(checkBoxMember.check){
        document.querySelector('#total').textContent = `$${discountedPrice(subtotal).toFixed(2)}`;
    }else{
        document.querySelector('#total').textContent = `$${(subtotal).toFixed(2)}`;
    }
}
document.querySelector('#getTotal').addEventListener('click',isDiscounted);



/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector('#array').textContent = `Source Array ${numbersArray}`;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number %2 == 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number %2 == 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum,number)=> sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.reduce((sum,number) => sum + number * 2); 
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum,number)=> number + sum);