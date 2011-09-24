//Visual Frameworks
//09/2011
//Thomas Burns

//--------------------------------------------------------------------------------------------------------------------------------------
//Preloads and default var's and functions

//Image variables
	var cardioPic = new Image(); cardioPic.src 		= "img/cardio.jpg";
	var strengthPic = new Image(); strengthPic.src 	= "img/strength.jpg";
	var flexPic = new Image(); flexPic.src 			= "img/flexibility.jpg";
//Div Creator
function divMaker (theParentId, aKey){
	var topDoc = document.getElementById(theParentId);
	var createDiv = document.createElement("div");
	createDiv.setAttribute("id", aKey);
	topDoc.appendChild(createDiv);
};

// Paragraph Creator.
function pMaker(aKey, newText){
    var nDiv   = document.getElementById(aKey);
    var pDrop    = document.createElement("p");
    var myText  = document.createTextNode(newText);
    pDrop.appendChild(myText);
    // Set the new paragraph inside of the div here.
    nDiv.appendChild(pDrop);
};
// Creates an image inside of my div tag.
function CreateImg(theKey, url, altText){
    var myImage = document.createElement("img");
    var nDiv   = document.getElementById(theKey);
    myImage.setAttribute("id","fitnessImage");
    myImage.setAttribute("src",url);
    myImage.setAttribute("alt", altText);
    // Set the new image inside of the div here.
    nDiv.appendChild(myImage);
};
function linkCreator(theKey){
    var link1     = document.createElement("a");
    var link2     = document.createElement("a");
    var myDiv   = document.getElementById(theKey);
        link1.setAttribute("href","JavaScript:DeletItem(" + theKey + ")");
        link1.setAttribute("id", "link1");
        var myText1 = document.createTextNode("Delete Item");
        link1.appendChild(myText1);
    
        link2.setAttribute("href","JavaScript:EditItem(" + theKey + ")");
        link2.setAttribute("id", "link2");
        var myText2  = document.createTextNode("Edit Item");
        link2.appendChild(myText2);
    
    myDiv.appendChild(link1);
    myDiv.appendChild(link2);
    
}; // END CreateLinks function.

//--------------------------------------------------------------------------------------------------------------------------------------

//This causes the sliderbar to show its value as it is slid back and forth
function showValue(newValue){
	document.getElementById("nums").innerHTML=newValue;
};

//--------------------------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------------------------------



//Beginning of storeItems function
function storeItems() {
	var date 		= document.getElementById("date").value;
	var time 		= document.getElementById("time").value;
	var fullName 	= document.getElementById("fullName").value;
	var dob 		= document.getElementById("dob").value;
	var email 		= document.getElementById("email").value;
	var phone 		= document.getElementById("phone").value;
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
		myrange,
		fitPackage,
		mailList,
		notes
	];
	
    var myYear              	= myDate.getFullYear();
    var myMonth             	= myDate.getMonth();
    var myDay               	= myDate.getDate();
    var myHours             	= myDate.getHours();
    var myMinutes           	= myDate.getMinutes();
    var mySeconds           	= myDate.getSeconds();
    var theKey = myYear + "" + myMonth + "" + myDay + "" + myHours + "" + myMinutes + "" + mySeconds;

	localStorage.setItem(theKey, allFields.join(";")); 

alert("Items Stored");
pullLocal();	
};

//--------------------------------------------------------------------------------------------------------------------------------------

//Pull values back from localStorage

function pullLocal() {
    var date;
	var	time;
	var	fullName;
	var	dob;
	var	email;
	var	phone;
	var	myrange;
	var	fitPackage;
	var	mailList;
	var	notes;
    
    for (i = 0; i<localStorage.length;i++){
        theKey   = localStorage.key(i);
        var myValue = localStorage.getItem(theKey);
	
	var values 			= myValue.split(";");
	var date 		 	= values[0];
	var time 		 	= values[1];
	var fullName		= values[2];
	var dob 		 	= values[3];
	var email 		 	= values[4];
	var phone 		 	= values[5];
	var myrange 	 	= values[6];
	var fitPackage 	 	= values[7];
	var mailList 	 	= values[8];
	var notes 		 	= values[9];
	
divMaker ("page2",theKey);
pMaker (theKey, "The date: " + date);
pMaker (theKey, "Appointment time: " + time);
pMaker (theKey, "Full name: " + fullName);
pMaker (theKey, "eMail: " + email);
pMaker (theKey, "Phone: " + phone);
pMaker (theKey, "Value: " + myrange);
pMaker (theKey, "Fit Package: " + fitPackage);
pMaker (theKey, "Mailing list: " + mailList);
pMaker (theKey, "Notes: " + notes);

if (fitPackage == "spinClass") {
CreateImg(theKey, "../img/cardio.jpg", "Spin Class");
}
if (fitPackage == "kickBoxing") {
CreateImg(theKey, "../img/cardio.jpg", "Kick Boxing");
}
if (fitPackage == "lowerBodySculpt") {
CreateImg(theKey, "../img/strength.jpg", "Lower Body Sculpt");
}
if (fitPackage == "upperBodyMeltdown") {
CreateImg(theKey, "../img/strength.jpg", "Upper Body Melt Down");
}
if (fitPackage == "yoga") {
CreateImg(theKey, "../img/flexibility.jpg", "Yoga");
}
if (fitPackage == "pilates") {
CreateImg(theKey, "../img/flexibility.jpg", "Pilates");
}

linkCreator(theKey);	
	
	};//End of for loop
};//End of local storage pull


	
//--------------------------------------------------------------------------------------------------------------------------------------
//Clears the local Storage to reveal form
function clearLocal() {
	document.getElementById("page2").style.display = "block";
	localStorage.clear();
	return false;
};

function deleteItem(theKey) {
	var tellMe = confirm("Once you do this there is no going back");
	if (tellMe == true){
	localStorage.removeItem(theKey);
	alert("Another one bites the dust");
	}
};