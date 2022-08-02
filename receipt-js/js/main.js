/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billTotalInput = document.getElementById('billTotalInput');
const billTipInput = document.getElementById('tipInput');
const perPersonTotal = document.getElementById('perPersonTotal');
const operatorBtn = document.querySelectorAll('.operator-btn')
const numberOfPeople = document.getElementById('numberOfPeople');

const operator = () => {
  operatorBtn.forEach(button => {
    button.style.cursor = 'pointer';
  })
}

// Get number of people from number of people div
let numOfPeople = Number(document.getElementById('numberOfPeople').innerText)
// ** Calculate the total bill per person **
 
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billTotalInput.value)
    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercent = 100
    let tip = Number(billTipInput.value) / tipPercent
    //get the total tip amount
    const tipAmount = bill * tip
    // calculate the total (tip amount + bill)
    const total = tipAmount + bill
    // calculate the per person total (total divided by number of people)
    let personTotal = Number(perPersonTotal.innerText)
    personTotal = total / numOfPeople
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = `$${personTotal.toFixed(2)}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = (bill) => {
    // increment the amount of people
    numOfPeople += 1
    // update the DOM with the new number of people
    numberOfPeople.innerText = numOfPeople
    // calculate the bill based on the new number of people
    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = (personTotal,total) => {
    /* guard clause <- Guard clauses can reduce the 
    number of lines in your functions, classes, and so on. 
    A result of using multiple guard clauses is that you can see what 
    conditions trigger certain code to be executed. 
    */

    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    // decrement the amount of people

    if(numOfPeople <= 1) return 1 //guard clause
    if(numOfPeople > 1) numOfPeople --

    // update the DOM with the new number of people
    numberOfPeople.innerText = numOfPeople
    // calculate the bill based on the new number of people
    calculateBill()
  }
