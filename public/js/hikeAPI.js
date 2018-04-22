function displayTrailInfo(lati, longi) {

        //var trail = $(this).attr("data-name");
        let lat = lati;
        let long = longi;
        let maxDistance = 10;
        //https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200252138-f373bf62d2f3d526e56392c58af99811                                                                                                 
        var queryURL = 'https://www.hikingproject.com/data/get-trails?' + 'lat=' + lat + '&lon=' + long + '&maxDistance=' + maxDistance + '&key=200252138-f373bf62d2f3d526e56392c58af99811';
        
        console.log("the queryURL is + ", queryURL);
        // Creating an AJAX call for the specific trail button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          for (var i = 0; i < response.trails.length; i++) {
             console.log("this is in the forLoop", i);
            // Creating a div to hold the trail
            var trailDiv = $("<div class='trail'>");

            // Storing the rating data
            let name = response.trails[i].name;
            let stars = Math.floor(response.trails[i].stars);
            console.log("the star scroe is ", stars);
            let starVotes = response.trails[i].starVotes;
            
            let difficulty = response.trails[i].difficulty;
           
            
            // Creating an element to have the rating displayed
            var title = $("<h1>").text(name); 
            var h2One = $("<h2>").text("Star Rating: " + stars);
            
            // for (var i = 0; i < stars; i++) {
            //     h2One.text(h2One.text() + '\u2605');
            // }

            var h2Two = $("<h2>").text("Star Votes: " + starVotes);
            var h2Three = $("<h2>").text("Difficulty: " + difficulty);
            var imgURL;
            if(response.trails[i].imgMedium){
                imgURL = response.trails[i].imgMedium;
            }else{
                imgURL = "images/trailSearch.jpg";
            }

            // Creating an element to hold the image
            var image = $("<img>").attr("src", imgURL);
            
            // Displaying the rating
            trailDiv.append(title);
            trailDiv.append(h2One);
            trailDiv.append(h2Two);
            trailDiv.append(h2Three);
            
            // Appending the image
            trailDiv.append(image);
            
            // Putting the entire trail above the previous trails
            $("#trails-view").prepend(trailDiv);
          };//end of for loop. 
          
   //        {{#each trails}}
            //  <div class="trail col-xs-4 col-sm-4 col-md-4 col-lg-4 card" id="{{id}}">
            //      <h1 class="Title">{{name}}</h1>
            //      <p>Star Rating: + {{stars}} </p>
            //      <p>Star Votes: + {{starVotes}} </p>
            //      <p>Difficulty: + {{difficulty}} </p>
            //      <img src="{{imgMedium}}" class="img">
            //  </div>
            // {{/each}}

        });// end of done function 
      }// end of displayTrailInfo function 