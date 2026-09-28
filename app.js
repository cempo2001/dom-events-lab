
/*-------------------------------- Variables --------------------------------*/


let firstNumber = '';
let operator = '';
let secondNumber = '';


const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector('.display');

console.dir(calculator);
console.dir(displayElement);


/*----------------------------- Event Listeners -----------------------------*/


calculator.addEventListener('click', (event) => 
{

  if (!event.target.classList.contains('button')) 
    {
    return;
    }

 const buttonValue = event.target.innerText;

  if (event.target.classList.contains('number')) 
    {
    handleNumber(buttonValue);
    }

  if (event.target.classList.contains('operator')) 
    {
    handleOperator(buttonValue);
    }

  if (event.target.classList.contains('equals')) 
    {
    calculateResult();
    }
});


/*-------------------------------- Functions --------------------------------*/


const handleNumber = (number) =>
{

  if (operator === '') 
    {
    firstNumber = firstNumber + number;
    displayElement.textContent = firstNumber;
    } 
  else 
    {
    secondNumber = secondNumber + number;
    displayElement.textContent = secondNumber;
    }
};

const handleOperator = (selectedOperator) =>
{
 
  if (selectedOperator === 'C') 
    {
    clearCalculator();
    return;
    }

  if (firstNumber === '') 
    {
    return;
    }

 
  operator = selectedOperator;
  displayElement.textContent = operator;
};


const calculateResult = () => 
{

  if (
    firstNumber === '' ||
    operator === '' ||
    secondNumber === ''
    ) 
  {
    return;
  }

    const firstValue = Number(firstNumber);
    const secondValue = Number(secondNumber);

  let result;

  if (operator === '+') 
    {
    result = firstValue + secondValue;
    } 
    else if (operator === '-') 
    {
    result = firstValue - secondValue;
    } 
    else if (operator === '*') 
    {
    result = firstValue * secondValue;
    } 
    else if (operator === '/') {
    result = firstValue / secondValue;
    }

  displayElement.textContent = result;

  firstNumber = result.toString();

  operator = '';
  secondNumber = '';
};


const clearCalculator = () => 
{
  firstNumber = '';
  operator = '';
  secondNumber = '';

 
  displayElement.textContent = '0';
};

clearCalculator();