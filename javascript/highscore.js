
// 1. Link to Firebase
var config = {
  apiKey: "AIzaSyAnDIrxPck-uh7JhwatLgC8HbMK5xQ2en4",
  authDomain: "carlsanfran.firebaseapp.com",
  databaseURL: "https://carlsanfran.firebaseio.com",
  projectId: "carlsanfran",
  storageBucket: "carlsanfran.appspot.com",
  messagingSenderId: "751701180914"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function(){


	// 2. Button for adding scores
	$("#addScoreBtn").on("click", function(e){
    e.preventDefault();


		// Grabs user input and assign to variables
		var userName = $("#UserNameInput").val().trim();
		var Score = $("#scoreInput").val().trim();


		// Test for variables entered
		console.log(UserName);
		console.log(score);


		// Creates local "temporary" object for holding scores data
		// Will push this to firebase
		var newUser = {
			name:  UserName,
			score: score,
		}

		// pushing scoresInfo to Firebase
		scoreData.push(newUser);



		// clear text-boxes
		$("#UserNameInput").val("");
		$("#scoreInput").val("");

    database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().score);


      // full list of items to the well
      $("#full-member-list").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
        " </span><span id='score'> " + childSnapshot.val().score
      );

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    // Change the HTML to reflect
      $("#UserNameInput").html(snapshot.val().name);
      $("#scoreInput").html(snapshot.val().email);
		// Prevents page from refreshing
		//return false;
	});

	//scoreData.on("child_added", function(childSnapshot, prevChildKey){

		//console.log(childSnapshot.val());

		// assign firebase variables to snapshots.
		//var firebaseName = childSnapshot.val().name;
		//var firebaseScore = childSnapshot.val().score;


		// var diffTime = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes");
		// var timeRemainder = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes") % firebaseFrequency ;
		// var minutes = firebaseFrequency - timeRemainder;
    //
		// var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");
    //
		// // Test for correct times and info
		// console.log(minutes);
		// console.log(nextTrainArrival);
		// console.log(moment().format("hh:mm A"));
		// console.log(nextTrainArrival);
		// console.log(moment().format("X"));
    //
		// // Append train info to table on page
		// $("#trainTable > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseScore + "</td><td>"+ firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");
