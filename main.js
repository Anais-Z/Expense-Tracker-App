//import expense.js to main,js
import Expense from '/expense.js'

//accessing the submit button
const submit = document.querySelector('.submit')

//accessing the amount input
const amount = document.querySelector('input[name=amount]')

//accessing the date input
const date = document.querySelector('input[name=date]')

//accessing the location input
const locationName = document.querySelector('input[name=locationName]')

submit.addEventListener('click', () => {
   

})

 //using a promise to check if the 3 inputs have values


    //values of the inputs will be placed as arguments when creating an expense object
    let expense = new Expense(amount, date, locationName)
