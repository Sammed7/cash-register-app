const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillandCashAmount(){
    console.log("clicked")
    message.style.display = "none"
    if(billAmount.value > 0) {
        if(cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else {
            showMessage("*The cash provided should be atleast equal to bill amount");
        }
    }
    else {
        showMessage("*Invalid Bill amount");
    }
});

function calculateChange(amountToBeReturned) {
    // go over all the available notes so using for loop
    for(let i = 0; i < availableNotes.length; i++) {
        
        // no of notes need for denomination
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );

        // updating the value of amount to be returned after calculating no of notes
        amountToBeReturned %= availableNotes[i];

        // updating the no of notes in the table for current amount
        noOfNotes[i].innerText = numberOfNotes;
    };
    
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
};
