let Form = document.getElementById('form1');

form.addEventListener('submit', getFormvalue);

function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	let firstName = document.getElementId('firstName').value;
	let lastName = document.getElementId('lastName').value;
	alert('First Name: ${fname}, Last Name: ${lname}');
}
