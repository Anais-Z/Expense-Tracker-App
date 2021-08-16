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

class Expense{
    constructor(amount, date, locationName){
        this.amount = amount
        this.date = date
        this.locationName = locationName
    }
}