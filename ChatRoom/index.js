// Jump to the next field once you hit max characters
function moveOnMax(field,nextFieldID){
  if(field.value.length >= field.maxLength){
    document.getElementById(nextFieldID).focus();
  }
};

// Upon form submit, insert form values into the page
function yes(form) {
	var one = document.forms.windingroad.one.value;

	
	document.getElementById('your-words').innerHTML = one + "<br>";
	document.getElementById('windingroad').reset();
	
	// Use CSS to fade it in
	document.getElementById('your-words').style.opacity = "1";
	
	// Doesn't actually submit the form
	return false;
};

// Reset the form with the reset button
function reset() {
	document.getElementById('windingroad').reset();
	document.getElementById('your-words').innerHTML = '';
}