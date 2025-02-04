// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
const totalCost2Elem = document.querySelector(".totalTwo")
const callsTotal2Elem = document.querySelector(".callTotalTwo");
const smsTotal2Elem = document.querySelector(".smsTotalTwo")
var callsTotal2 = 0;
var smsTotal2 = 0;
//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click",radioBillTotal)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioBillTotal(){
    // get the value entered in the billType textfield
    //var billTypeEntered = billTypeText.value.trim();
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
    // update the correct total
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
    //update the totals that is displayed on the screen.
    callsTotal2Elem.innerHTML = callsTotal2.toFixed(2);
    smsTotal2Elem.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalCost2Elem.innerHTML = totalCost2.toFixed(2);

    //color the total based on the criteria
    if (totalCost2 >= 50){
        // adding the danger class will make the text red
        totalCost2Elem.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalCost2Elem.classList.add("warning");
    }
}