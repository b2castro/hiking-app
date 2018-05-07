
function saveTrailName(trailName, trailId ){        
    localStorage.setItem("trailName", trailName.id);
    localStorage.setItem("trailId", trailId);
    location.href = "/trailPage";
}


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
             $("#trails-view").empty();
          for (var i = 0; i < response.trails.length; i++) {
     

            //anchor.append(trailDiv);
              
            // Storing the rating data
            let name = response.trails[i].name;
            let noSpaceName = name.replace(/-|\s/g,"");
            let trailId = response.trails[i].id;
            
            // Creating a div to hold the trail
            // var anchor = $("<a>").attr("href", "/trailPage");
            var trailDiv = $("<div class='trail col-xs-5 col-sm-5 col-md-5 col-lg-5' id= " + noSpaceName + " >");  
            let stars = Math.floor(response.trails[i].stars);
            let starVotes = response.trails[i].starVotes;
            let difficulty = response.trails[i].difficulty;
            let summary = response.trails[i].summary;
            // Creating an element to have the rating displayed
            //var anchor = $("<a href='/trailPage'>")
           
            var anchor = $("<a onclick=saveTrailName("+ noSpaceName +"," + trailId + ") >");   
            anchor.append(trailDiv);
            var title = $("<h1 id='title'>").text(name);
            var string = "Star Rating: ";
            for (var j = 0; j < 5; j++) {
                if(j < stars){
                    string = string + '\u2605';
                } else {
                    string = string + '\u2606';
                }
            }

            var h2Three = $("<h2>").text("Difficulty: ");
            var tree1 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
            var tree2 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
            var tree3 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
            var tree4 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
            var tree5 = $("<span>").addClass("glyphicon glyphicon-tree-conifer");
            
            switch(difficulty) {
                case "green":
                    h2Three.append(tree1);
                    break;
                case "greenBlue":
                    h2Three.append(tree1);
                    h2Three.append(tree2);
                    break;
                case "blue":
                    h2Three.append(tree1);
                    h2Three.append(tree2);
                    h2Three.append(tree3);
                    break;
                case "blueBlack":
                    h2Three.append(tree1);
                    h2Three.append(tree2);
                    h2Three.append(tree3);
                    h2Three.append(tree4);
                    break;
                case "black":
                    h2Three.append(tree1);
                    h2Three.append(tree2);
                    h2Three.append(tree3);
                    h2Three.append(tree4);
                    h2Three.append(tree5);
                    break;
                default:
                    console.log("uh oh");
                    break;
            }
            var h2One = $("<h2>").text(string);
            var h2Two = $("<h2>").text("Total Votes: " + starVotes);
            
            var h2Four = $("<h2 id='summary'>").text("Summary: " + summary);
            var imgURL;
            if(response.trails[i].imgMedium){
                imgURL = response.trails[i].imgMedium;
            }else{
                imgURL = "images/trailSearch.jpg";
            }


            // Creating an element to hold the: image
            var image = $("<img>").attr("src", imgURL);
            
            // Displaying the rating
            //empty the trailDiv. 
            trailDiv.append(title);
            trailDiv.append(h2One);
            trailDiv.append(h2Two);
            trailDiv.append(h2Three);
            trailDiv.append(h2Four);
        
            
            // Appending the image
            trailDiv.append(image);
            
            // Putting the entire trail above the previous trails
            $("#trails-view").append(anchor);
            if((i % 2) == 0){
                //if is even 
                var space = $("<div class= 'col-xs-2 col-sm-2 col-md-2 col-lg-2'>");
                $("#trails-view").append(space);

            };
              
          };//end of for loop. 
        });// end of done function 
      }// end of displayTrailInfo function 