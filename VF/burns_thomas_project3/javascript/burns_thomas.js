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
	//Create Fields Array
	var fields = new Array;
	var fields = [document.getElementById('date'),
				  document.getElementById('time'),
				  document.getElementById('name'),
				  document.getElementById('dob'),
				  document.getElementById('email'),
				  document.getElementById('phone'),
				  //document.getElementById('gender'),
				  document.getElementById('notes')
	];
//Create Variable to Keep Track of Errors
	var err = 0;
//Start Validation Loop
	for (i=0;i<fields.length;i++){
//Check Fields in Array to Make Sure they are not Empty
	if (fields[i].value == ""){
	err++;
};
};
//Close Loop
//Check That There are No Errors
	if (err === 0){
//Submit Form
	document.fitForm22.submit();
	}else {
	//If there are errors, return false and alert the user
	alert("Please Fill Out All Of The Fields");
	return false;
};
};
	
	/*var textCheck=document.forms["fitForm22"]["name"].value;
	if (textCheck==null || textCheck=="")
	  {
	  alert("Name must be filled out");
	  ["fitForm22"]["name"].focus();
	  return false;
	};
	  
	var mailCheck=document.forms["fitForm22"]["email"].value;
	var atpos=mailCheck.indexOf("@");
	var dotpos=mailCheck.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mailCheck.length)
	  {
	  alert("Not a valid e-mail address");
	  return false;
	};
	
 	if ( ( document.forms["fitForm22"] ["gender"][0].checked == false )
    && ( document.forms["fitForm22"] ["gender"][1].checked == false ) )
    {
        alert ( "Please choose your Gender: Male or Female" );
        valid = false;
    };
	
	if ( ( document.forms["fitForm22"] ["packages"][0].checked == false )
    && ( document.forms["fitForm22"] ["packages"][1].checked == false ) )
    {
        alert ( "Please choose your Fitness Package: Cardio, Weights or Resistance" );
        valid = false;
    };*/
	
	/*if ( document.forms["fitForm22"] ["mail_listing"].checked == false )
    {
        alert ( "Are you sure we have really great coupons." );
        valid = false;
    };*/
	
	
  
//End of validateForm functions

//This section is for saving my form data to local storage and reporting it to browser via alert message
function getItems() {
	if (localStorage.getItem("appname")) {
		var date 	= localStorage.getItem("appdate");
		var time 	= localStorage.getItem("apptime");
		var name 	= localStorage.getItem("appname");
		var dob	 	= localStorage.getItem("appdob");
		var email 	= localStorage.getItem("appemail");
		var phone 	= localStorage.getItem("appphone");
		var gender 	= localStorage.getItem("appgender");
		var notes 	= localStorage.getItem("appnotes");
		
		var viewInfo = [
			date,
			time,
			name,
			dob,
			email,
			phone,
			gender,
			notes
		];
		
		alert(viewInfo);
		document.getElementById("fitForm22").style.display = "none";
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
	var gender 	= document.getElementsByName("gender").valuel
	var notes 	= document.getElementById("notes").value;
	localStorage.setItem("appdate", date);
	localStorage.setItem("apptime", time);
	localStorage.setItem("appname", name);
	localStorage.setItem("appdob", dob);
	localStorage.setItem("appemail", email);
	localStorage.setItem("appphone", phone);
	localStorage.setItem("appgender", gender);
	localStorage.setItem("appnotes", notes);
};

//Clears the local Storage to reveal form
function clearLocal() {
	localStorage.clear();
	return false;
};