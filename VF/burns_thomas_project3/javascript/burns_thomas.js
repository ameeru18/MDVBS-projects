//Visual Frameworks
//09/2011
//Thomas Burns

//This is to shorten the console log entry
function con (message) {console.log(message)};


//This causes the sliderbar to show its value as it is slid back and forth
function showValue(newValue){
	document.getElementById("range").innerHTML=newValue;
};

//Validation section



function validateForm() {
	//Validate Date
	var getdate = document.forms[0]["date"].value;
	if (getdate == "") {
		document.getElementById("date").style.border = "1px solid red";
		var slap = prompt("Enter day you want to workout to proceed", "date");
		if (slap != null && slap != "") {
			document.forms[0]["date"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("date").style.border = "1px solid #ccc";
		}
	//Validate First Name
	var getFirstName = document.forms[0]["firstName"].value;
	if (getFirstName == "") {
		document.getElementById("firstName").style.border = "1px solid red";
		var slap = prompt("Enter your first name to proceed", "");
		if (slap != null && slap != "") {
			document.forms[0]["firstName"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("firstName").style.border = "1px solid #ccc";
		}
	//Validate Last Name	
	var getLastName = document.forms[0]["lastName"].value;
	if (getLastName == "") {
		document.getElementById("lastName").style.border = "1px solid red";
		var slap = prompt("Enter your last name to proceed", "");
		if (slap != null && slap != "") {
			document.forms[0]["lastName"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("lastName").style.border = "1px solid #ccc";
		}	
		alert("Form has been Submitted. Thank you.");
	
};	


//End of validateForm functions

//This section is for saving my form data to local storage and reporting it to browser via alert message
function getItems() {
	if (localStorage.getItem("appfirstName")) {
		var date 		= localStorage.getItem("appdate");
		var time 		= localStorage.getItem("apptime");
		var firstName 	= localStorage.getItem("appfirstName");
		var lastName 	= localStorage.getItem("applastName");
		var dob	 		= localStorage.getItem("appdob");
		var email 		= localStorage.getItem("appemail");
		var phone 		= localStorage.getItem("appphone");
		var packages 	= localStorage.getItem("apppackages");
		var notes 		= localStorage.getItem("appnotes");
		
		var viewInfo = [
			date,
			time,
			firstName,
			lastName,
			dob,
			email,
			phone,
			packages,
			notes
		];
		
		alert(viewInfo);
		document.getElementById("fitForm22").style.display = "none";
		var clearLink = document.getElementById("clear");
		clearLink.style.display = "block";
	};
};

function storeItems(id) {
	var date 		= document.getElementById("date").value;
	var time 		= document.getElementById("time").value;
	var fistName 	= document.getElementById("firstName").value;
	var lastName 	= document.getElementById("lastName").value;
	var dob 		= document.getElementById("dob").value;
	var email 		= document.getElementById("email").value;
	var phone 		= document.getElementById("phone").value;
	var packages 	= document.getElementsByName("packages").valuel
	var notes 		= document.getElementById("notes").value;
	localStorage.setItem("appdate", date);
	localStorage.setItem("apptime", time);
	localStorage.setItem("appfirstName", firstName);
	localStorage.setItem("applastName", lastName);
	localStorage.setItem("appdob", dob);
	localStorage.setItem("appemail", email);
	localStorage.setItem("appphone", phone);
	localStorage.setItem("apppackages", packages);
	localStorage.setItem("appnotes", notes);
};

//Clears the local Storage to reveal form
function clearLocal() {
	localStorage.clear();
	return false;
};