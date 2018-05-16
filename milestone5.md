Team 2Squared

Team Members: Bryle Castro, Hansol You, Julian Leung, Karanbir Bains

UI Page One:


UI Page Two:  
![image](https://user-images.githubusercontent.com/7214905/40106495-d02371da-58aa-11e8-913b-fe1624918715.png)
![capture](https://user-images.githubusercontent.com/7214905/40106704-4b1c894e-58ab-11e8-92ed-536fb042b69b.PNG)

The UI for the second page of the application, the page dedicated a specific trail didn't change as much; however, an actual map that represents the trail now shows up on the page. Comments and images are also displayed if there are comments and images that are submitted using the submission form that is located below the map. This is evident on the first image, it displays a map trail of Torrey Pines State Reserve Loop and no submitted comments and images; on the other hand, the second image  displays a map trail of Mission Trail Loops along with the submitted comments and image. Moreover, there is now just one submit button for submitting an image and a comment (Submitting an image is optional).

User Action 1: 

On the main page on the application, the page with the search bar, a user could search a specific trail or an area such as San Diego and the system will display a list of the nearest trails. The user could then click on one of the listed trails (Pressing the enter key will refresh the page so the user shouldn't press the enter key when using the search bar). Once the user has clicked on one of the listed trails the search bar displayed, ten of the nearest trails near the chosen area will will displayed to the user along with details about the trails such as a trails difficulty,rating, and summary.

This is a core functionality of the app because our app is suppose help users choose a trail to hike based on the rating, difficulty, and the comments of other hikers who hiked the trail. And, in order to make the actual search work, the team used two API's, the Google maps API so that we could have an automated search bar and the hiking API so that we can obtain trail data in North America that we could then display on the front end of the application. 

User Action 2: 

On the second page of application, a user could submit a comment and an image about a trail using the submission form below the map of the trail (Submitting an image is optional); the user could reach the second page by clicking on one of the trails that was displayed on the main page of the application. 
  
This is a core functionality of the app because our app is meant to help users decide on a trail to hike based on feedback given by our application; and, having the input of other hikers will help users decide whether or not a trail is worth the time and effort hike.
In order to make the commenting system work, the team used firebase database and firebase storage. The firebase database stores the comments and firebase storage stores images that are submitted. When the second page is loaded, based on the trail that the user wants
to see and has clicked on, the appropriate comments and images will be pulled from firebase and be displayed on the front end of the second page of the application.
  
