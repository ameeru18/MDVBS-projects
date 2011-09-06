//Visual Frameworks
//09/2011
//Thomas Burns

//This is to shorten the console log entry
function con (message) {console.log(message)};

//This causes the sliderbar to show its value as it is slid back and forth
function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
};

//This section is for saving my form data to local storage and reporting it to browser via alert message
function getItems() {
	if (localStorage.getItem("appname")) {
		var date 	= localStorage.getItem("appdate");
		var time 	= localStorage.getItem("apptime");
		var name 	= localStorage.getItem("appname");
		var dob	 	= localStorage.getItem("appdob");
		var email 	= localStorage.getItem("appemail");
		var phone 	= localStorage.getItem("appphone");
		var notes 	= localStorage.getItem("appnotes");
		
		var viewInfo = [
			date,
			time,
			name,
			dob,
			email,
			phone,
			notes
		];
		
		alert(viewInfo);
		document.getElementById("fit_form").style.display = "none";
		var clearLink = document.getElementById("clear");
		clearLink.style.display = "block";
	};
};

function storeItems(id) {
	var date 	= document.getElementById("date").value;
	var time 	= document.getElementById("time").value;
	var name 	= document.getElementById("name").value;
	var dob 	= document.getElementById("dob").value;
	var email 	= document.getElementById("email").value;
	var phone 	= document.getElementById("phone").value;
	var notes 	= document.getElementById("notes").value;
	localStorage.setItem("appdate", date);
	localStorage.setItem("apptime", time);
	localStorage.setItem("appname", name);
	localStorage.setItem("appdob", dob);
	localStorage.setItem("appemail", email);
	localStorage.setItem("appphone", phone);
	localStorage.setItem("appnotes", notes);
};

//Clears the local Storage to reveal form
function clearLocal() {
	localStorage.clear();
	return false;
	
};