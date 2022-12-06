/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

function convert() {
    let numberEl = document.getElementById('input-field').value;
    lengthEl.innerHTML = `${numberEl} meters = ${(numberEl*3.281).toFixed(2)} feet | ${numberEl} feet = ${(numberEl*0.3048).toFixed(2)} meters`;
    volumeEl.innerHTML = `${numberEl} litters = ${(numberEl*0.264).toFixed(2)} gallons | ${numberEl} gallons = ${(numberEl*3.78541).toFixed(2)} litters`;
    massEl.innerHTML = `${numberEl} kilograms = ${(numberEl*2.204).toFixed(2)} pounds | ${numberEl} pounds = ${(numberEl*0.453592).toFixed(2)} kilos`
}