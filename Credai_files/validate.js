

function validateForm() {
	
    var x = document.forms["myForm"]["p_user_nm"].value;
	var y = document.forms["myForm"]["emailid"].value;
	var c = document.forms["myForm"]["p_user_mob"].value;
	var d = document.forms["myForm"]["city"].value; 
	alert();
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(y) == false) 
    {
        alert('Please Enter Email Address');
         return (false);
    }	
	if (c == "") {
	    alert('Please Enter Your Contact Number');
		return false;
	}
	if(isNaN(c)) {
		alert('Please Enter a Valid  Number')
		return false;
	}
	if(c.length <= '9') {
		alert('Please Enter Atleast 10 Digit Contact Number');
		return false;
	}
	if (d == null || d == "") {
        alert("Company must be filled out");
        return false;
     }		
	return true;
}






