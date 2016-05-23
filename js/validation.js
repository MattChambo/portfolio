var submitForm = document.querySelector("#submision");
submitForm.onsubmit = function(event) {
	
  		// Stop the form from submitting
 		event.preventDefault();

 		var allFields = document.querySelectorAll(".inputField");
 		var valid = false;
 		for(var i=0; i<allFields.length; i++) {
 			if( allFields[i].value !== '' ) {
  				valid = true;
 			} else {
 				valid = false;
 			}
 		}
 		if(valid === true) {
 			submitForm.style.display = "none";
 			document.querySelector("#form h1").innerHTML = "Success";
 		}


}

var firstName = document.querySelector("#first-name");
var firstNameMessage = document.querySelector("#first-name-message");
var lastName = document.querySelector("#last-name");
var lastNameMessage = document.querySelector("#last-name-message");
var email = document.querySelector("#email");
var emailMessage = document.querySelector("#email-message");
var post = document.querySelector("#post");
var postMessage = document.querySelector("#post-message");


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





