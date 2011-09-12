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
		var slap = prompt("Enter the date you wish to Git Fit", "");
		if (slap != null && slap != "") {
			document.forms[0]["date"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("date").style.border = "1px solid #ccc";
		};
	//Validate First Name
	var getFirstName = document.forms[0]["firstName"].value;
	if (getFirstName == "") {
		document.getElementById("firstName").style.border = "1px solid red";
		var slap = prompt("Enter your first name to proceed", "First Name");
		if (slap != null && slap != "") {
			document.forms[0]["firstName"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("firstName").style.border = "1px solid #ccc";
		};
	//Validate Last Name	
	var getLastName = document.forms[0]["lastName"].value;
	if (getLastName == "") {
		document.getElementById("lastName").style.border = "1px solid red";
		var slap = prompt("Enter your last name to proceed", "Last Name");
		if (slap != null && slap != "") {
			document.forms[0]["lastName"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("lastName").style.border = "1px solid #ccc";
		};
		
	//Validate Date of Birth	
	var getdob = document.forms[0]["dob"].value;
	if (getdob == "") {
		document.getElementById("dob").style.border = "1px solid red";
		var slap = prompt("Enter your date of birth to proceed", "12/12/1900");
		if (slap != null && slap != "") {
			document.forms[0]["dob"].value = slap;	
		}	
		return false;
	}
		else {
			document.getElementById("dob").style.border = "1px solid #ccc";
		};	
		

//Validate Email addresses	
	var getemail = document.forms[0]["email"].value;
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!(re.exec(getemail))) {
		document.getElementById("email").style.border = "1px solid red";
		alert("Please enter a valid email address please.");
		return false;
		}
		

		else {
			document.getElementById("email").style.border = "1px solid #ccc";
		};	
		
//Validate Phone number	
	var getephone = document.forms[0]["phone"].value;
	var re = /^\([1-9]\d{2}\)\s?\d{3}\-\d{4}$/;
		if (!(re.exec(getephone))) {
		document.getElementById("phone").style.border = "1px solid red";
		alert("Please enter a valid phone number formated like this: (222) 222-2222 please.");
		return false;
		}
		

		else {
			document.getElementById("phone").style.border = "1px solid #ccc";
		};
		
		if ( ( document.forms[0]["gender"][0].checked == false )
    && ( document.forms[0]["gender"][1].checked == false ) )
    {
        //document.getElementById("gender").style.border = "1px solid red";
		alert ( "Please choose your Gender: Male or Female" );
        valid = false;
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
		var fitPackage	= localStorage.getItem("appfitPackage");
		var notes 		= localStorage.getItem("appnotes");
		var range 		= localStorage.getItem("apprange");
		//var gender 		= localStorage.getItem("appgender");
		//var mailList 	= localStorage.getItem("mailList");
		
		var viewInfo = [
			date,
			time,
			firstName,
			lastName,
			dob,
			email,
			phone,
			//gender,
			range,
			fitPackage,
			//mailList,
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
	var firstName 	= document.getElementById("firstName").value;
	var lastName 	= document.getElementById("lastName").value;
	var dob 		= document.getElementById("dob").value;
	var email 		= document.getElementById("email").value;
	var phone 		= document.getElementById("phone").value;
	var fitPackage	= document.getElementById("fitPackage").value;
	var notes 		= document.getElementById("notes").value;
	var range 		= document.getElementById("range").value;
	var gender 		= document.getElementById("gender").value;
	var mailList 	= document.getElementById("mailList").value;
	localStorage.setItem("appdate", date);
	localStorage.setItem("apptime", time);
	localStorage.setItem("appfirstName", firstName);
	localStorage.setItem("applastName", lastName);
	localStorage.setItem("appdob", dob);
	localStorage.setItem("appemail", email);
	localStorage.setItem("appphone", phone);
	localStorage.setItem("appfitPackage", fitPackage);
	localStorage.setItem("appnotes", notes);
	localStorage.setItem("apprange", range);
	localStorage.setItem("appgender", gender);
	localStorage.setItem("appmailList", mailList);
};

//Clears the local Storage to reveal form
function clearLocal() {
	localStorage.clear();
	return false;
};




/*visibility funcitons

if (document.getElementById('fitPackage').value == "kickBoxing") {
document.getElementById('myImage').src = "/img/kickbox.jpg";
}

if (document.getElementById('fitPackage').value == "kickBoxing") {
document.getElementById('myImage').src = "/img/kickbox.jpg";
}

if (document.getElementById('fitPackage').value == "coreStrength") {
document.getElementById('myImage').src = "/img/corestrength.jpg";
}

or you can go for the innerHTML like this:

if (document.getElementById('fitPackage').innerHTML = "Spin Class"){document.getElementById('myImage').src = "img/spin.jpg;

*/
