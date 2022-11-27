/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var numDay = 0;
var costPerDay = 35;
var day = []

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monday = document.getElementById("monday");
monday.addEventListener("click", monClick);
function monClick(){
    if (day.includes(monday)){
        numDay -=1
    }
    monday.classList.add("clicked");
    numDay +=1;
    day.push(monday)
    rate();
    calculate();
}

let tuesday = document.getElementById("tuesday");
tuesday.addEventListener("click", tueClick)
function tueClick(){
    if (day.includes(tuesday)){
        numDay -=1
    }
    tuesday.classList.add("clicked");
    numDay += 1
    day.push(tuesday)
    rate()
    calculate()
}

let wednesday = document.getElementById("wednesday");
wednesday.addEventListener("click", wedClick)
function wedClick(){
    if (day.includes(wednesday)){
        numDay -=1
    }
    wednesday.classList.add("clicked")
    numDay += 1
    day.push(wednesday)
    rate()
    calculate()
}

let thursday = document.getElementById("thursday");
thursday.addEventListener("click", thuClick)
function thuClick(){
    if (day.includes(thursday)){
        numDay -=1
    }
    thursday.classList.add("clicked")
    numDay += 1
    day.push(thursday)
    rate()
    calculate()
}

let friday = document.getElementById("friday");
friday.addEventListener("click", friClick)
function friClick(){
    if (day.includes(friday)){
        numDay -=1
    }
    friday.classList.add("clicked")
    numDay += 1
    day.push(friday)
    rate()
    calculate()
    
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clear)

function clear(){
    numDay = 0
    costPerDay = 35
    monday.classList.remove("clicked")
    tuesday.classList.remove("clicked")
    wednesday.classList.remove("clicked")
    thursday.classList.remove("clicked")
    friday.classList.remove("clicked")
    day = []
    calculate()
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function rate(){
    let half = document.getElementById("half");
    half.addEventListener("click", halfClick);
    function halfClick(){
        costPerDay = 20
        half.classList.add("clicked")
        full.classList.remove("clicked")
        calculate()
    }

    let full = document.getElementById("full");
    full.addEventListener("click", fullClick);
    function fullClick(){
        full.classList.add("clicked")
        costPerDay = 35
        half.classList.remove("clicked")
        calculate()    
    }
}
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    var calculatedCost = document.getElementById("calculated-cost");
    let totalcost = numDay * costPerDay
    calculatedCost.innerHTML = totalcost
}
