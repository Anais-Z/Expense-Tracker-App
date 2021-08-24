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

//creating the div
const divMessage = document.createElement('div')

//creating the error message if user doesn't enter the fields
const errorMessage = document.createElement("p")

 //accessing the main element
 const mainDiv = document.querySelector('.main-div')  


submit.addEventListener('click', () => {
   
     //creating a promise to check if the 3 inputs have values
 let thePromise = new Promise((resolve, reject) => {

    //check to see if the inputs are empty or not
    if( amount.value != "" && date.value != "" && locationName.value != ""){
        const expenseDetails = [];
        expenseDetails.push(amount.value)
        expenseDetails.push(date.value)
        expenseDetails.push(locationName.value)
        resolve(expenseDetails)
    }else{
        reject("Please fill in every field")
    }
})

    //calling the promise
   thePromise.then((expenseDetails) => {
        //values of the inputs will be placed as arguments when creating an expense object
       let expense = new Expense(expenseDetails[0] , expenseDetails[1],expenseDetails[2])
       console.log(expense.amount , expense.date, expense.locationName)
   }).catch((error) => {
       errorMessage.innerText = error
       errorMessage.style.color = 'red'
       divMessage.append(errorMessage)
       mainDiv.append(divMessage)
        console.log(error)
})


})

