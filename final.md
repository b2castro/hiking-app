Team 2Squared

Team Members: Bryle Castro, Hansol You, Julian Leung, Karanbir Bains



SOURCE FILES:
  - hike-page.handlebars
    
    This file handles the display of a specific trail name and its map.This file also contains the required javascript functions
    that allows user to submit comments and images in regard to the trail as well the the necessary functions to populate the page 
    with comments and images. Moreover, clicking on the number 2 logo will redirect the use to the hompage of the application
 
    
    
  - homepage.handlebars
    
    This file allows a user to search a location such as Sand Diego, CA using the search bar; the search bar
    user Google API's autocomplete location search system to do this. Upon searching a location, the app will
    then display the ten hiking trails that are near the provided location. Clicking on any of the displayed 
    trails will redirect to the user to hike-page.handlebars.
    
    Note: Clicking on the number 2 logo will redirect the user to the homepage.handlebars.
    
  - mainstyle.css
    
    This file is for the custom styling of the homepage.handlebars and hike-page.handlebars. 
  
  - hikeAPI.js
  
    This file contains the functions necessary to display the respected trails based on a given location by using HikingProject API,
    and the GoogleMap's autocomplete API.



CONTRIBUTIONS:
  
  - Bryle Castro
  
    Worked on the back-end on the application by connecting firebase to the front-end of the application. Was responsible for providing
    the functionality to store the user submitted images and comments in firebase, and provide the functionality to dynamically display 
    images and comments on hike-page.handlebars based on the trail a user is viewing.
    
    Also worked on applying GoogleMaps API on the homepage.handlebars in order to have a search bar that uses an autocomplete system for
    searching general locations or trail locations. 
    
  - Hansol You
    
    Worked on designing and updating changes to the HTML code of homepage.handlebars and hike-page.handlebars for aesthetics and user 
    readability. Moreover, she also applied the color scheme the application currently has so that viewing the application outdoors 
    would be easieron the eyes of the users. She worked closely with Julian to provide the initial design skeleton for hike-page handlebars 
    
    She was also responsible for documenting source files.
    
  - Julian Leung
    
    Worked on designing and implementing hike-page handlebars. More specifically, he was responsible for the functionality to allow  
    users to sumbmit images and comments while allowing the user to preview the image they are about to submit. Additionally, he helped
    with providing the initial skeleton for hike-page handlebars.
    
    Also worked on developing and completing the demo video for the application as well as documentation for milestones.
  
  - Karanbir Bains
  
    Worked on the front-end and back-end of the application. He provided initial design to homepage.handlebars as well as 
    appylying the Hiking Trails API to the application so that trails based on nearest location would be displayed to the user on
    homepage.handlebars. He also customized what to retrieve from the Hiking Trails API and what to display to the users (trail name, 
    difficulty, rating, and summary).
    
    Also worked on applying styling changes to hike-page.handlebars so that the color scheme of the application was consistent on every
    page.
    
DEMO VIDEO: 

  - See Link Below: 
    https://youtu.be/bKvutpUcBWI
    


