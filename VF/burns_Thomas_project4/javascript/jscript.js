//Visual Frameworks
//09/2011
//Thomas Burns


//This causes the sliderbar to show its value as it is slid back and forth
function showValue(newValue){
	document.getElementById("nums").innerHTML=newValue;
};


//Validation section
function validateForm() {
//Validate Date
	var getdate = document.forms[0]["date"].value;
	if (getdate == "") {
		document.getElementById("date").style.border = "1px solid red";
		var slap = prompt("Enter the date you wish to Git Fit", "01/01/2111");
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
		var slap = prompt("Enter your full name to proceed", "Simon Says");
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
		var slap = prompt("Enter your date of birth to proceed", "01/01/2111");
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
			var slap = prompt("Enter your email address to proceed", "blank@domain.com");
			document.forms[0]["email"].value = slap;
			return validateForm();
		};
		
//Validate Phone number	
	var getephone = document.forms[0]["phone"].value;
	var re = /^\(?(\d{3})\)?[\.\-\/ ]?(\d{3})[\.\-\/ ]?(\d{4})$/;
		if (!(re.exec(getephone))) {
			document.getElementById("phone").style.border = "1px solid red";
			var slap = prompt("Enter your phone number to proceed", "2223456789");
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




//Beginning of storeItems function
function storeItems() {
	var newDate = new Date();
	var uniqueId = newDate.getTime()
	var date 		= document.getElementById("date").value;
	var time 		= document.getElementById("time").value;
	var fullName 	= document.getElementById("fullName").value;
	var dob 		= document.getElementById("dob").value;
	var email 		= document.getElementById("email").value;
	var phone 		= document.getElementById("phone").value;
	var mGender 	= document.getElementById("mGender").checked;
	var fGender 	= document.getElementById("fGender").checked;
	var myrange 	= document.getElementById("myrange").value;
	var fitPackage	= document.getElementById("fitPackage").value;
	var mailList 	= document.getElementById("mailList").value;
	var notes 		= document.getElementById("notes").value;
	var allFields = [
		date,
		time,
		fullName,
		dob,
		email,
		phone,
		mGender,
		fGender,
		myrange,
		fitPackage,
		mailList,
		notes
	];
	/*if (date != "" && time != "" && fullName != "" && dob != "" && email != "" && phone != "" && mGender != "" && fGender != "" && fitPackage != "") {*/
	localStorage.setItem(uniqueId, allFields.join(";"));
/*} else {
	alert("Please correctly complete the form");

}*/ 

	
alert("Items Stored")
getItems();
	
	uniquieId = dateObject.getFullYear() + " " + dateObject.getMonth() + " "
		myOutput = myArray.join(";");
		localStorage.SetItem(key, myOutput);
	
};



function getItems() {
	if (!(localStorage.getItem("fullName"))) {return false}
		var myDate 		= localStorage.getItem("date");
		document.getElementById("line1").innerHTML="Date : " + myDate;
		
		var myTime 		= localStorage.getItem("time");
		document.getElementById("line2").innerHTML="Appointment Time : " + myTime;
		
		var cliName 	= localStorage.getItem("fullName");
		document.getElementById("line3").innerHTML="Client Name : " + cliName;
		
		var myBirth 	= localStorage.getItem("dob");
		document.getElementById("line4").innerHTML="client date of birth : " + myBirth;
		
		var myEmail 	= localStorage.getItem("email");
		document.getElementById("line5").innerHTML="Email Address : " + myEmail;
		
		var myPhone 	= localStorage.getItem("phone");
		document.getElementById("line6").innerHTML="Phone Number : " + myPhone;
		
		var theMan	 	= localStorage.getItem("mGender");
		document.getElementById("line9").innerHTML="Cilent is a male : " + theMan;
		
		var theWoman 	= localStorage.getItem("fGender");
		document.getElementById("line10").innerHTML="Cilent is a woman: " + theWoman;
		
		var myLevel 	= localStorage.getItem("myrange");
		document.getElementById("line8").innerHTML="Current Fitness Level : " + myLevel;
		
		var myPackage 	= localStorage.getItem("fitPackage");
		document.getElementById("line7").innerHTML="Package Chosen : " + myPackage;
		
		var mySpam 		= localStorage.getItem("mailList");
		document.getElementById("line11").innerHTML="Client wants additional information : " + mySpam;
		
		var myNotes 	= localStorage.getItem("notes");
		document.getElementById("line12").innerHTML="Notes for the Trainer : " + myNotes;
		
	
	//Image inclusion section
		
		var imgCardio = new Image();
			imgCardio.src = "images/cardio.jpg";
		
		var imgStrength = new Image();
			imgStrength.src = "images/strength.jpg";
		
		var imgFlexibility = new Image();
			imgFlexibility.src = "images/flexibility.jpg";
			

				
		if (myPackage == "spinClass" || myPackage =="kickBoxing" || myPackage == "aeroJump") {
			document.getElementById('disImage').src = imgCardio.src;
		}
		if (myPackage == "coreStrength" || myPackage =="lowerBodySculpt" || myPackage == "upperBodyMeltdown") {
			document.getElementById('disImage').src = imgStrength.src;
		}
		if (myPackage == "yoga" || myPackage =="pilates" || myPackage == "totalStretch") {
			document.getElementById('disImage').src = imgFlexibility.src;
		}
		
	//End of Images section
		
	document.getElementById("page2").style.display = "block";
		
		

};//End of Get Items function
	

/*//Array creation section
function keyMaker(){
		var myDate = document.getElementById('apptime').value
		var myTime = document.getElementById("appdate").value
		var	cliName = document.getElementById("fullName").value;
		var	myBirth = document.getElementById("dob").value;
		var	myEmail = document.getElementById("email").value;
		var	myPhone = document.getElementById("phone").value;
		var	myPackage 	= document.getElementById("fitPackage").value;
		var	myLevel 	= document.getElementById("myrange").value;
		var	theMan 		= document.getElementById("mGender").checked;
		var	theWoman 	= document.getElementById("fGender").checked;
		var	mySpam 		= document.getElementById("mailList").value;
		var	myNotes 	= document.getElementById("notes").value;

		
		myArray = [
			myDate,
			myTime,
			cliName,
			myBirth,
			myEmail,
			myPhone,
			myPackage,
			myLevel,
			theMan,
			theWoman,
			mySpam,
			myNotes
		];
		uniquieId = dateObject.getFullYear() + " " + dateObject.getMonth() + " "
		myOutput = myArray.join(";");
		localStorage.SetItem(key, myOutput);
		
};//End of keyMaker function*/


	

//Add additonal entry to the form after first submission
var counter = 1;
var limit = 7;
function addSession(page2){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('page2');
          newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
          document.getElementById(getItems).appendChild(newdiv);
          counter++;
     }
};//End of addSession function section

//Clears the local Storage to reveal form
function clearLocal() {
	document.getElementById("page2").style.display = "none";
	localStorage.clear();
	return false;
};


