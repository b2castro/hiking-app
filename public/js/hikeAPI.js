/*
   FileName: homepage.handlebars
   
   Description: This file contains the functions necessary to display
                the respected trails based on a given location by using 
                HikingProject API.
*/
/* Saves trail name onto local storage for later use*/
function saveTrailName(trailName, trailId) {
	localStorage.setItem("trailName", trailName.id);
	localStorage.setItem("trailId", trailId);
	location.href = "/trailPage";
}
/* 
    This function uses the passed latitude and longitude to 
    display ten nearest trails onto homepage.handlebars in 
    respect to the given latitude longitude. 
*/
function displayTrailInfo(lati, longi) {
	//var trail = $(this).attr("data-name");
	let lat = lati;
	let long = longi;
	let maxDistance = 10;
	var queryURL = 'https://www.hikingproject.com/data/get-trails?' + 'lat=' + lat + '&lon=' + long + '&maxDistance=' + maxDistance + '&key=200252138-f373bf62d2f3d526e56392c58af99811';
	console.log("the queryURL is + ", queryURL);
	// Creating an AJAX call for the specific trail button being clicked
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		$("#trails-view").empty();
		for (var i = 0; i < response.trails.length; i++) {
			// Storing the rating data
			let name = response.trails[i].name;
			let noSpaceName = name.replace(/-|\s/g, "");
			let trailId = response.trails[i].id;
			// Creating a div to hold the trail
			// this is the parent frame
			var trailDiv = $("<div class = 'trail col-xs-12 col-sm-12 col-md-12 col-lg-12' id = " + noSpaceName + " >");
			let stars = Math.floor(response.trails[i].stars);
			let starVotes = response.trails[i].starVotes;
			let difficulty = response.trails[i].difficulty;
			let summary = response.trails[i].summary;
			// Creating an element to have the rating displayed
			//var anchor = $("<a href='/trailPage'>")
			var anchor = $("<a onclick=saveTrailName(" + noSpaceName + "," + trailId + ") >");
			anchor.append(trailDiv);
			// calculating how many stars there are
			var string = "";
			for (var j = 0; j < 5; j++) {
				if (j < stars) {
					string = string + '\u2605';
				} else {
					string = string + '\u2606';
				}
			}
			// title and difficulty together
			var h2Three = $("<h1 class='col-xs-4 col-sm-4 col-md-4 col-lg-4' id='Difficulty'>").text(" Difficulty: ");
			//var h2Three = $("<h2>").text("Difficulty: ");
			var tree1 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
			var tree2 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
			var tree3 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
			var tree4 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
			var tree5 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
			switch (difficulty) {
				case "green":
					h2Three.append(tree1);
					//console.log("difficulty 1");
					break;
				case "greenBlue":
					h2Three.append(tree1);
					h2Three.append(tree2);
					//console.log("difficulty 2");
					break;
				case "blue":
					h2Three.append(tree1);
					h2Three.append(tree2);
					h2Three.append(tree3);
					//console.log("difficulty 3");
					break;
				case "blueBlack":
					h2Three.append(tree1);
					h2Three.append(tree2);
					h2Three.append(tree3);
					h2Three.append(tree4);
					//console.log("difficulty 4");
					break;
				case "black":
					h2Three.append(tree1);
					h2Three.append(tree2);
					h2Three.append(tree3);
					h2Three.append(tree4);
					h2Three.append(tree5);
					//console.log("difficulty 5");
					break;
				default:
					console.log("uh oh");
					break;
			}
			// stars + # of votes
			var h2One = $("<h2>").text(string + " " + starVotes + " reviews");
			//console.log("h2One is " + string + " " + starVotes + " reviews");
			h2Three.append(h2One);
			//var h2Two = $("<h2>").text("Total Votes: " + starVotes);
			var h2Five = $("<h2 id='name'>").text(name);
			var h2Four = $("<h2 id='summary'>").text("Summary: " + summary);
			//console.log("h2Four is " + "Summary: " + summary);
			var imgURL;
			if (response.trails[i].imgMedium) {
				imgURL = response.trails[i].imgMedium;
			} else {
				imgURL = "images/trailSearch.jpg";
			}
			// Creating an element to hold the: image
			var image = $("<img class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>").attr("src", imgURL);
			// Displaying the rating
			//empty the trailDiv. 
			//trailDiv.append(title);
			var text = $("<div id'textDiv' class='col-xs-4 col-sm-4 col-md-4 col-lg-4' >");
			text.append(h2Five);
			text.append(h2Four);
			// Appending the image
			trailDiv.append(image);
			trailDiv.append(text);
			trailDiv.append(h2Three);
			// Putting the entire trail above the previous trails
			$("#trails-view").append(anchor);
			if ((i % 2) == 0) {
				//if is even 
				var space = $("<div class= 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>");
				$("#trails-view").append(space);
			};
		}; //end of for loop. 
	}); // end of done function 
} // end of displayTrailInfo function