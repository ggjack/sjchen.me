setInterval(function(){
	var birth= new Date(1997,3,21,21,15,0,0);
	var age = document.getElementById("age");

	var now = new Date();
	var msInAYear=365*24*60*60*1000;
	var myAge = now.getFullYear()-birth.getFullYear();
	var birthTime = new Date(now.getFullYear(),3,21,21,15,0,0);
	var timeAfterBT = now.getTime() - birthTime.getTime();
	var actualAge = (myAge + timeAfterBT/msInAYear).toFixed(11);

	age.textContent="Age : " +actualAge+ " Years Old";
},120);