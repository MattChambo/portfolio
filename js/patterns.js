//Regular expressions for validation.js

var namePattern = new RegExp("^[a-zA-Z.'-]{2,30}$");
var emailPattern = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
var postPattern = new RegExp("^[a-zA-Z0-9!#$%&*.'-]{2,30000}$");