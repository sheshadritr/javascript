//Bootstrap Carousel
$('#carousel-main').carousel();


$(document).ready(function() {
	var inputName=	$('#contactName');
	var inputEmail= $('#contactEmail');
	var inputNumber= $('#contactNumber');
	var inputSubject= $('#contactSubject');
	var inputMessage= $('#contactMessage');
	var inputFromDate= $('#fromDate');
	var inputToDate= $('#toDate');
	
	
	inputName.blur(validateName);
	inputEmail.blur(validateEmail);
	inputEmail.blur(validateNumber);
	inputEmail.blur(validateSubject);
	inputEmail.blur(validateMessage);
	inputEmail.blur(validateFromDate);
	inputEmail.blur(validateToDate);
	
	
	function validateName() { 
		var name = inputName.val();
		var regex = /^[a-zA-Z ]*$/;
		  	if (name.length === 0) {
			    alert("Please enter your Name.");
			    return ;
			} else if (!regex.test(name)) {
			    alert("Name can only contain alphabets");
			    return;
			} else if(name.length > 30) {
			  	alert("Characters beyond length");
				return ; 
			} else {
			    return;
			}
		}
	
	function validateEmail() { 
		var email = inputEmail.val();
		var regex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		  	if (email.length === 0) {
			    alert("Please enter your Email-id.");
			    return ;
			} else if (regex.test(email)) {
			    alert("Email-id cannot contain special characters except -, _, @, .");
			    return;
			} else {
			    return;
			}
		}
	
	function validateNumber() { 
		var number = inputNumber.val();
		var regex = /^[0-9]{1,10}$/;
		  	if (number.length === 0) {
			    alert("Please enter your 10-digit Contact Number.");
			    return ;
			} else if (regex.test(number)) {
			    alert("Contact Number can only have digits!");
			    return;
			} else if(name.length > 10) {
			  	alert("Number beyond length - 10 digits");
				return ; 
			} else {
			    return;
			}
		}
	
	
	function validateSubject() { 
		var subject = inputSubject.val();
		  	if (subject.length === 0) {
			    alert("Please enter your Subject.");
			    return ;
			} else if(subject.length > 50) {
			  	alert("Characters beyond length - 50 characters");
				return ; 
			} else {
			    return;
			}
		}
	
	
	function validateMessage() { 
		var message = inputMessage.val();
		  	if (message.length === 0) {
			    alert("Please enter your Email-id.");
			    return ;
			} else if(message.length > 500) {
			  	alert("Characters beyond length - 500 characters");
				return ; 
			} else {
			    return;
			}
		}
	
	function validateFromDate() { 
		var from = inputFromDate.val();
		  	if (from.length === 0) {
			    alert("Please enter the from date.");
			    return ;
			} else if(from.length > 10) {
			  	alert("Date given is beyond length as in DD/MM/YYYY format");
				return ; 
			} else {
			    return;
			}
		}
	
	
	function validateToDate() { 
		var to = inputToDate.val();
		  	if (to.length === 0) {
			    alert("Please enter the to date.");
			    return ;
			} else if(name.length > 10) {
			  	alert("Date given is beyond length as in DD/MM/YYYY format");
				return ; 
			} else {
			    return;
			}
		}
});