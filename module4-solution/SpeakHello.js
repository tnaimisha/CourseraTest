// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function(window){
	
	var helloSpeaker = {
		speak: function(name){
			console.log(speakWord + " " + name);
		}
	};

	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

	

	window.helloSpeaker = helloSpeaker;

})(window);
