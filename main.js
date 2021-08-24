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

 //accessing the table
 const table = document.querySelector(".main-table")

submit.addEventListener('click', () => {
   
     //creating a promise to check if the 3 inputs have values
 let thePromise = new Promise((resolve, reject) => {

    //check to see if the inputs are empty or not
    if( amount.value != "" && date.value != "" && locationName.value != ""){

        //created an array to push the values
        const expenseDetails = [];
        expenseDetails.push(locationName.value)
        expenseDetails.push(date.value)
        expenseDetails.push(amount.value)
        resolve(expenseDetails)
    }else{
        reject("Please fill in every field")
    }
})

    //calling the promise
   thePromise.then((expenseDetails) => {
        //values of the inputs will be placed as arguments when creating an expense object
        //arguments will be the 3 values from the expenseDetails array
       let expense = new Expense(expenseDetails[0] , expenseDetails[1],expenseDetails[2])
       console.log(expense.amount , expense.date, expense.locationName)
       //call createRow function and set the expenseDetails array as parameter
       createRow(expenseDetails)

   }).catch((error) => {
       errorMessage.innerText = error
       errorMessage.style.color = 'red'
       divMessage.append(errorMessage)
       mainDiv.append(divMessage)

       //deletes message after 3 seconds it was shown
       setTimeout(deleteMessage, 3000)
        console.log(error)
})


})

//function used to delete the error message
const deleteMessage = () =>{
    divMessage.remove(self)
}

//function will create the table row and table description every time button is clicked
const createRow = (expenseDetails) =>{
    //created table row
    let tableRow = document.createElement('tr');

    //created 4 table descriptions
    let tableDesc1 = document.createElement('td')
    let tableDesc2 = document.createElement('td')
    let tableDesc3 = document.createElement('td')
    let tableDesc4 = document.createElement('td')

    //created a delete row button
    let deleteRow = document.createElement('button')
    deleteRow.innerHTML = "Delete Row"

    //Each value from the array will be the inner text to each table description element
    tableDesc1.innerText = `${expenseDetails[0]}`
    tableDesc2.innerText = expenseDetails[1]
    tableDesc3.innerText = `$${expenseDetails[2]}`

    // Appended the delete row button to the last td element
    tableDesc4.append(deleteRow) 

    //append all 4 table descriptions to the table row
    tableRow.append(tableDesc1)
    tableRow.append(tableDesc2)
    tableRow.append(tableDesc3)
    tableRow.append(tableDesc4)

    //append the table row to the actual table itself
    table.append(tableRow)

}


