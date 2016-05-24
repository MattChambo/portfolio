var submitForm = document.querySelector("#submission");
submitForm.onsubmit = function(event) {

 		// Get reference to all fields and check to see if all fields have been filled out, display a success message if all fields have been filled in correctly 

 		var allFields = document.querySelectorAll(".inputField");

 		var valid = false;
 		for(var i=0; i < allFields.length; i++) {
 			if( allFields[i].value !== '' ) {
 				console.log(allFields[i]);
  				valid = true;
 			} else {
 				valid = false;
 				break;
 			}
 		}
 		if(valid === true) {
 			submitForm.style.display = "none";
 			document.querySelector("#form h1").innerHTML = "Your poetry has been submited";
 		}
 		// Stop the form from submitting
 		event.preventDefault();
}

// Get references to the input fields

var firstName = document.querySelector("#first-name");
var firstNameMessage = document.querySelector("#first-name-message");
var lastName = document.querySelector("#last-name");
var lastNameMessage = document.querySelector("#last-name-message");
var email = document.querySelector("#email");
var emailMessage = document.querySelector("#email-message");
var post = document.querySelector("#post");
var postMessage = document.querySelector("#post-message");


// Check to see if first name is correct length and contains only valid characters and display message to user if the name is invalid

firstName.onblur = function() {
	
	if( this.value.length < 2) {
		firstNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		firstNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	} else if ( namePattern.test ( this.value ) ) {
		firstNameMessage.innerHTML = "";
		
	}
	else {
		firstNameMessage.innerHTML = "Your first name cannot contain invalid characters";
	}

}

// Check to see if last name is correct length and contains only valid characters and display message to user if the name is invalid

lastName.onblur = function() {
	
	if( this.value.length < 2) {
		lastNameMessage.innerHTML = "Your name must be at least two characters long";
	} else if ( this.value.length > 30) {
		lastNameMessage.innerHTML = "Your name can not be more than thirty characters long";
	} else if ( namePattern.test ( this.value ) ) {
		lastNameMessage.innerHTML = "";
		
	}
	else {
		lastNameMessage.innerHTML = "Your last name cannot contain invalid characters";
	}
}

// Check to see if email address is formated correctly, is an appropriate length and contains only valid characters and then display message to user if the email address is invalid

email.onblur = function() {
	
	if( this.value.length < 5) {
		emailMessage.innerHTML = "Your email address must be at least five characters long";
	} else if ( this.value.length > 50) {
		emailMessage.innerHTML = "Your email address can not be more than fifty characters long";
	} else if ( emailPattern.test ( this.value ) ) {
		emailMessage.innerHTML = "";
		
	}
	else {
		emailMessage.innerHTML = "Invalid email address";
	}
}

// Check to see if text field is an apropriate length and only contains valid characters and display a message if the text is invalid

post.onblur = function() {
	
	if( this.value.length < 2) {
		postMessage.innerHTML = "Your poetry must be at least two characters long";
	} else if ( this.value.length > 30000) {
		postMessage.innerHTML = "Your poetry can not be more than thirty thousand characters long";
	} else if ( namePattern.test ( this.value ) ) {
		postMessage.innerHTML = "";
		
	}
	else {
		postMessage.innerHTML = "Your poetry cannot contain invalid characters";
	}
}





