function displayTrailInfo(lati,longi) {

        //var trail = $(this).attr("data-name");
        let lat = lati
        let long = longi;
        let maxDistance = 10;
        //https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200252138-f373bf62d2f3d526e56392c58af99811                                                                                                 
        var queryURL = "https://www.hikingproject.com/data/get-trails?" + 'lat=' lat + '&lon=' + long + '&maxDistance=' + maxDistance || 10 + "&key=200252138-f373bf62d2f3d526e56392c58af99811";

        // Creating an AJAX call for the specific trail button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          for (var i = 0; i < response.length; i++) {
             
            // Creating a div to hold the trail
            var trailDiv = $("<div class='trail'>");

            // Storing the rating data
            let stars = response[i].stars;
            let starVotes = response[i].starVotes;
            let difficulty = response[i].difficulty;
            
            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Star Rating: " + rating);
            var pTwo = $("<p>").text("Star Votes: " + starVotes);
            var pThree = $("<p>").text("Difficulty: " + difficulty);
            
            var imgURL = response[i].imgMedium;
            // Creating an element to hold the image
            var image = $("<img>").attr("src", imgURL);
            
            // Displaying the rating
            trailDiv.append(pOne);
            trailDiv.append(pTwo);
            trailDiv.append(pThree);

            // Appending the image
            trailDiv.append(image);

            // Putting the entire trail above the previous trails
            $("#trails-view").prepend(trailDiv);
          });

        });
      }
    