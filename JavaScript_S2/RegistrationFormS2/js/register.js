// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.

function validateForm(e) {
    "use strict";

    if (typeof e =="undefined") e = window.event;
    //Get form object references

    var firstName = u.$("firstName");
    var lastName;
    var email;
    var phone;
    var city;
    var state;
    var zip;
    var terms;

    //Flag variable
    var error = false;

    //Validate the first name
    if (/^[A-z \.\-']{2, 20}$/i.test(firstName.value)) {} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	"use strict";
    
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    "use strict";

    u.addEvent
    (/* Takes 3 arguments
     1. What object is calling the event?
     2. what is the event?
     3. What is the function? */
     u.$("theForm"), "submit", validateForm)};