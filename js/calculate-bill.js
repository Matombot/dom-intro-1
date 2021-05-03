//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billString = document.querySelector(".billString");
const total = document.querySelector(".total");
calculateBtn.addEventListener("click", totalPhoneBill)

function totalPhoneBill() {
    var bills = billString.value;
    var total = 0;
    var phoneBill = bills.split(",");
    for (var i = 0; i < phoneBill.length; i++) {
        var billItems = phoneBill[i]
        if (billItems.includes("l")) {
            //console.log(2.75)
            total += 2.75;
        }
        else if (billItems.includes("m")) {
            // console.log(0.75)
            total += 0.75;
        }
    }
    roundedBillTotal(total)
     console.log(total)
    billTotalElement.innerHTML = total.toFixed(2);
    //return total.toFixed(2);
}
function roundedBillTotal(total) {
    //var total = 0; 
    if (total > 30) {
        billTotalElement.classList.add("danger")
    }
    if (total < 30 && total > 20) {
        billTotalElement.classList.remove("danger")
       billTotalElement.classList.add("warning") 
    }
    else {
         billTotalElement.classList.remove("warning")
}
}

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
