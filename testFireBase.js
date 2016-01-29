// alert("works");
$(document).ready(function() {
	var ref = new Firebase("https://amber-inferno-5311.firebaseIO.com");

	$('#nameSubmitButton').on('click', function(e) {
		e.preventDefault();
		var firstName = $('#first-name').val();
		var lastName = $('#last-name').val();
		var myScore = $('#score').val();

		function Character() {
			this.firstName = firstName;
			this.lastName = lastName;
			this.myScore = myScore;
		}

		var person = new Character();
		// console.log(firstName);
		// console.log(lastName);
		// console.log(myScore);
		// Save data
		ref.push(person);
		// ref.set(person);
	});


	// Listen for realtime changes
	ref.on("value", function(data) {
	  var allData = data.val();
	  console.log(allData);
	});
});
