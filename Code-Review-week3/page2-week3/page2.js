function calculateInsurance(){

	n = document.getElementById('fname').value;
	a = document.getElementById('age').value;
	h = document.getElementById('hrpower').value;
	var insurance = h*100/a+150;

	document.getElementById('result').innerHTML = insurance;

	return(insurance);
}