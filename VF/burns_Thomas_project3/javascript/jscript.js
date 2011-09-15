//Visual Frameworks
//09/2011
//Thomas Burns


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
		var slap = prompt("Enter the date you wish to Git Fit", "01/01/2011");
		if (slap != null && slap != "") {
			document.forms[0]["date"].value = slap;	
		}	
		
	}
		else {
			document.getElementById("date").style.border = "1px solid #ccc";
		};
		
//Validate Name
	var getFullName = document.forms[0]["fullName"].value;
	if (getFullName == "") {
		document.getElementById("fullName").style.border = "1px solid red";
		var slap = prompt("Enter your full name to proceed", "First and Last Name");
		if (slap != null && slap != "") {
			document.forms[0]["fullName"].value = slap;	
		}	
		
	}
		else {
			document.getElementById("fullName").style.border = "1px solid #ccc";
		};

//Validate Date of Birth	
	var getdob = document.forms[0]["dob"].value;
	if (getdob == "") {
		document.getElementById("dob").style.border = "1px solid red";
		var slap = prompt("Enter your date of birth to proceed", "12/12/1900");
		if (slap != null && slap != "") {
			document.forms[0]["dob"].value = slap;	
		}	
		
	}
		else {
			document.getElementById("dob").style.border = "1px solid #ccc";
		};	
		

//Validate Email addresses	
	var getemail = document.forms[0]["email"].value;
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!(re.exec(getemail))) {
			document.getElementById("email").style.border = "1px solid red";
			var slap = prompt("Enter your email address to proceed", "user@domain.com");
			document.forms[0]["email"].value = slap;
			return validateForm();
		};
		
//Validate Phone number	
	var getephone = document.forms[0]["phone"].value;
	var re = /^\([1-9]\d{2}\)\s?\d{3}\-\d{4}$/;
		if (!(re.exec(getephone))) {
		document.getElementById("phone").style.border = "1px solid red";
		var slap = prompt("Enter your phone number to proceed", "(222) 222-2222");
		if (slap != null && slap != "") {
			document.forms[0]["phone"].value = slap;
		}
		
		}
		

		else {
			document.getElementById("phone").style.border = "1px solid #ccc";
		};
		

storeItems();	

};


//End of validateForm functions


//A couple of styles for the clear storage link
function mouseHover() {
	for (var i=0, j=anchorTags.length; i < j; i++ ) {
		anchorTags[i].style.color = "#009900";	
	}
};

function mouseOut() {
	for (var i=0, j=anchorTags.length; i < j; i++ ) {
		anchorTags[i].style.color = "#990000";	
	}
};


function getItems() {
	if (!(localStorage.getItem("appfullName"))) {return false}
		var myDate 		= localStorage.getItem("appdate");
		document.getElementById("line1").innerHTML="Date : " + myDate;
		
		var myTime 		= localStorage.getItem("apptime");
		document.getElementById("line2").innerHTML="Appointment Time : " + myTime;
		
		var clilName 	= localStorage.getItem("appfullName");
		document.getElementById("line3").innerHTML="Client Name : " + clilName;
		
		var myBirth 	= localStorage.getItem("appdob");
		document.getElementById("line4").innerHTML="client date of birth : " + myBirth;
		
		var myEmail 	= localStorage.getItem("appemail");
		document.getElementById("line5").innerHTML="Email Address : " + myEmail;
		
		var myPhone 	= localStorage.getItem("appphone");
		document.getElementById("line6").innerHTML="Phone Number : " + myPhone;
		
		var myPackage 	= localStorage.getItem("appfitPackage");
		document.getElementById("line7").innerHTML="Package Chosen : " + myPackage;
		
		var myLevel 	= localStorage.getItem("appmyrange");
		document.getElementById("line8").innerHTML="Current Fitness Level : " + myLevel;
		
		var theMan	 	= localStorage.getItem("appmGender");
		document.getElementById("line9").innerHTML="Cilent is a male : " + theMan;
		
		var theWoman 	= localStorage.getItem("appfGender");
		document.getElementById("line10").innerHTML="Cilent is a woman: " + theWoman;
		
		var mySpam 		= localStorage.getItem("appmailList");
		document.getElementById("line11").innerHTML="Client wants additional information : " + mySpam;
		
		var myNotes 	= localStorage.getItem("appnotes");
		document.getElementById("line12").innerHTML="Notes for the Trainer : " + myNotes;
		
		
		
		
		//var time 		= localStorage.getItem("apptime");
		//var fullName 	= localStorage.getItem("appfullName");
		//var dob	 		= localStorage.getItem("appdob");
		//var email 		= localStorage.getItem("appemail");
		//var phone 		= localStorage.getItem("appphone");
		//var fitPackage	= localStorage.getItem("appfitPackage");
		//var notes 		= localStorage.getItem("appnotes");
		//var myrange 	= localStorage.getItem("appmyrange");
		//var gender 		= localStorage.getItem("appgenCheck");
		//var mailList 	= localStorage.getItem("appmailCheck");
		
		

};//End of Get Items function
	

function storeItems() {
	var date 		= document.getElementById("date").value;
	var time 		= document.getElementById("time").value;
	var fullName 	= document.getElementById("fullName").value;
	var dob 		= document.getElementById("dob").value;
	var email 		= document.getElementById("email").value;
	var phone 		= document.getElementById("phone").value;
	var fitPackage	= document.getElementById("fitPackage").value;
	var notes 		= document.getElementById("notes").value;
	var myrange 	= document.getElementById("myrange").value;
	var mGender 	= document.getElementById("mGender").checked;
	var fGender 	= document.getElementById("fGender").checked;
	var mailList 	= document.getElementById("mailList").value;
	localStorage.setItem("appdate", date);
	localStorage.setItem("apptime", time);
	localStorage.setItem("appfullName", fullName);
	localStorage.setItem("appdob", dob);
	localStorage.setItem("appemail", email);
	localStorage.setItem("appphone", phone);
	localStorage.setItem("appfitPackage", fitPackage);
	localStorage.setItem("appnotes", notes);
	localStorage.setItem("appmyrange", myrange);
	localStorage.setItem("appmGender", mGender);
	localStorage.setItem("appfGender", fGender);
	localStorage.setItem("appmailList", mailList);
alert("Items Stored")
getItems();
};

//Clears the local Storage to reveal form
function clearLocal() {
	localStorage.clear();
	return false;
};


