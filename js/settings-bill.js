// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
const callCostElement = document.querySelector(".callCostSetting")
const smsCostElement = document.querySelector(".smsCostSetting")
const warningElement = document.querySelector(".warningLevelSetting")
const criticalElement = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
const settingBillAddBtn = document.querySelector(".settingBillAddBtn")
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;
// create a variables that will keep track of all three totals.
var callTotalElem = document.querySelector(".callTotalSettings")
var smsTotalElem = document.querySelector(".smsTotalSettings")
var totalSettingsElem = document.querySelector(".totalSettings")
var callTotalSettings = 0;
var smsTotalSettings = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", updateSetting)
//add an event listener for when the add button is pressed
settingBillAddBtn.addEventListener("click", settingsBill)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function settingsBill() {
    var clickRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked")
    if (clickRadioBtn) {
        var settingsItemTypes = clickRadioBtn.value;
    }
    if (settingsItemTypes === "call") {
        callTotalSettings += callCostSetting;

    }
    else if (settingsItemTypes === "sms") {
        smsTotalSettings += smsCostSetting;
    }
    callTotalElem.innerHTML = callTotalSettings.toFixed(2);
    smsTotalElem.innerHTML = smsTotalSettings.toFixed(2);
    var totalSettings = callTotalSettings + smsTotalSettings;
    totalSettingsElem.innerHTML = totalSettings.toFixed(2);
    if (totalSettings >= warningLevelSetting){
        // adding the warning class will make the text orange
        totalSettingsElem.classList.add("warning");
    }
    if (totalSettings >=criticalLevelSetting ){
        // adding the warning class will make the text orange
        totalSettingsElem.classList.add("danger");
    }
}
function updateSetting() {
    //Calls costs should now be configurable using the settings section.
    callCostSetting = Number(callCostElement.value);
    smsCostSetting = Number(smsCostElement.value);
    warningLevelSetting = Number(warningElement.value);
    criticalLevelSetting = Number(criticalElement.value);
}
