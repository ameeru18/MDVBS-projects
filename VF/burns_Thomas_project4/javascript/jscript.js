//Visual Frameworks
//09/2011
//Thomas Burns


//This causes the sliderbar to show its value as it is slid back and forth
function showValue(newValue){
	document.getElementById("nums").innerHTML=newValue;
};
 

//Validation section
function validateForm() {
//Browser Compatability
if (typeof(localStorage) == 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
            getItems(); //load the items

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
	var itemId = newDate.getTime() //creates a unique id with the milliseconds since January 1, 1970
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
	/* var allFields = [
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
	]; */
	
	values.push(date); //push each value into our values array
	values.push(time);
	values.push(fullName);
	values.push(dob);
	values.push(email);
	values.push(phone);
	values.push(mGender);
	values.push(fGender);
	values.push(myrange);
	values.push(fitPackage);
	values.push(mailList);
	values.push(notes);
 
try {
	localStorage.setItem(itemId, values.join(";")); //store the item in the database
} catch (e) {
	if (e == QUOTA_EXCEEDED_ERR) {
		alert("Quota exceeded!");
	}
}
	
	/*if (date != "" && time != "" && fullName != "" && dob != "" && email != "" && phone != "" && mGender != "" && fGender != "" && fitPackage != "") {*/
	localStorage.setItem(itemId, allFields.join(";"));
/*} else {
	alert("Please correctly complete the form");

}*/ 

	
alert("Items Stored")	
pullLocal()	
};

//Pull values back from localStorage

var itemKey = localStorage.key(0);
var values = localStorage.getItem(itemKey); 
values = values.split(";");
var date 		 = values[0];
var time 		 = values[1];
var fullName	 = values[2];
var dob 		 = values[3];
var email 		 = values[4];
var phone 		 = values[5];
var mGender 	 = values[6];
var fGender 	 = values[7];
var myrange 	 = values[8];
var fitPackage 	 = values[9];
var mailList 	 = values[10];
var notes 		 = values[11];

document.write('Date : ' + date + '<br />');
document.write('Appointment Time : ' + time + '<br />');
document.write('Client Full name : ' + fullName + '<br />');
document.write('Client Date of Birth : ' + dob + '<br />');
document.write('Client Email address : ' + email + '<br />');
document.write('Client Phone Number : ' + phone + '<br />');
document.write('Client is a male : ' + mGender + '<br />');
document.write('Client is a female : ' + fGender + '<br />');
document.write('Client Fitness Level : ' + myrange + '<br />');
document.write('Add Client to mailing list : ' + mailList + '<br />');
document.write('Clients notes to trainer : ' + notes + '<br />');



/* function pullLocal (){
	var value = localStorage.getItem();
	
	value = value.split(";");
	var date 		= value[0];
	var time 		= value[1];
	var fullName 	= value[2];
	var	dob 		= value[3];
	var	email 		= value[4];
	var	phone 		= value[5];
	var	mGender 	= value[6];
	var	fGender 	= value[7];
	var	myrange 	= value[8];
	var	fitPackage 	= value[9];
	var	mailList 	= value[10];
	var	notes 		= value[11]; */
	
getItems()	
	
};//End of local storage pull




function getItems() {
	
		
	
	
		
	document.getElementById("page2").style.display = "block";
		
		

};//End of Get Items function
	
	

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


