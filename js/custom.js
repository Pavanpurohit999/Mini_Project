$(document).ready(function(){
$('#navcolor').on('change', function (e) {
  
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("background-color", valueSelected);
    document.getElementById("navbgcolor").style.backgroundColor = localStorage.getItem("background-color");
    document.getElementById("navcolor").value = localStorage.getItem("background-color");

  }
  
  // $("#navbgcolor").css("background-color", valueSelected);
});

if (typeof(Storage) !== "undefined") {
  document.getElementById("navbgcolor").style.backgroundColor = localStorage.getItem("background-color");
  document.getElementById("navcolor").value = localStorage.getItem("background-color");

}

$(".card-img").click(function(e) {
    $(this).toggleClass("large");
});

$(".card").click(function(e) {
    $(this).toggleClass("large");

});

});


function validate()
{
	var phoneNo = document.getElementById('mob');
	var fname = document.getElementById('fname');
	var lname = document.getElementById('lname');
	var email = document.getElementById('email');
	var phoneNo = document.getElementById('mob');
	var gender = document.getElementsByName('gender');
	if (fname.value == "" || fname.value == null) {
		alert("Please enter First Name");
	}
	else if (lname.value == "" || lname.value == null) {
		alert("Please enter Last Name");
	}
	else if (email.value == "" || email.value == null) {
		alert("Please enter Email ID");
	}
	else if(phoneNo.value.length < 10 || phoneNo.value.length > 10)
        {
			alert("Please enter 10 digit mobile number");
        }
		
	else if (gender[0].checked == false && gender[1].checked == false)
		{
			alert("Please select Gender"); 
		} 
    else
        {
		document.getElementById('mob').value = "";
	 	document.getElementById('fname').value = "";
		document.getElementById('lname').value = "";
		document.getElementById('email').value = "";
		document.getElementById('mob').value = "";
		document.querySelector('input[name="gender"]:checked').checked = false;		
		document.getElementById('addr').value = "";
        alert("Registration Sucessfull..!!!");
        }
}

	