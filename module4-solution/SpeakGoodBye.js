// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function(window){
	

	var byeSpeaker = {
		speak: function(name) {
	  		console.log(speakWord + " " + name);
		}

	};
	

	var speakWord = "Good Bye";
	window.byeSpeaker = byeSpeaker;
	
})(window);


