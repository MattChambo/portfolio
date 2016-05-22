// Does this user have a name saved?

if( localStorage.getItem('first name') ){

	// Put the name in the name field
	document.querySelector('#first-name').value = localStorage.getItem('first-name');
}

if( localStorage.getItem('last name') ){

	document.querySelector('#last-name').value = localStorage.getItem('last-name');
}

if( localStorage.getItem('email') ){

	document.querySelector('#email').value = localStorage.getItem('email');
}

if( localStorage.getItem('post') ){

	document.querySelector('#post').value = localStorage.getItem('post');
}

// Listen for input on the first name field
document.querySelector('#first-name').onkeyup = function(){
	localStorage.setItem('first-name', this.value);
}

document.querySelector('#last-name').onkeyup = function(){
	localStorage.setItem('last-name', this.value);
}

document.querySelector('#email').onkeyup = function(){
	localStorage.setItem('email', this.value);
}

document.querySelector('#post').onkeyup = function(){
	localStorage.setItem('post', this.value);
}