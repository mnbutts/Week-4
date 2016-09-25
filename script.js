var churchillsSpeech = 1940;
var ghandisSpeech = 1942;
var x = ghandisSpeech - churchillsSpeech;
console.log("Ghandi's speech and Churchill's speech are " + x + " years apart");

   var theirFinestHour = {
		'name' : 'Winston Churchill',
		'year' : '1940',
		'bce' : false	
	};
	 var quitIndia = {
		'name' : 'Ghandi',
		'year' : '1942',
		'bce' : false	
	};
	 var demosthenes = {
		'name' : 'Demosthenes',
		'year' : '342',
		'bce' : true	
	};
var speeches = [ 
		theirFinestHour,
		quitIndia,
	    demosthenes
];
document.getElementById('BtnDonate').addEventListener('click', function(){
	"use strict";
	console.log("There are " + speeches.length + " speeches on the page");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  	"use strict";
	console.log("This speech was written by " + theirFinestHour.name +" in " + theirFinestHour.year + ". It is " + theirFinestHour.bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  "use strict";
  console.log("This speech was written by " + quitIndia.name +" in " + quitIndia.year + ". It is " + quitIndia.bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
 	"use strict";
  console.log("This speech was written by " + demosthenes.name +" in " + demosthenes.year + ". It is " + demosthenes.bce + " that this year is B.C.E.");
});