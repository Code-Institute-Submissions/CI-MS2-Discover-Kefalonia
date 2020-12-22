![Discover Kefalonia](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/document-title.jpg "Discover Kefalonia")

# [**Discover Kefalonia**](https://gazzaj.github.io/CI-MS2-Discover-Kefalonia/)

Kefalonia is the largest of the Greek Ionian islands, and is a popular holiday destination for many Europeans. Despite this it remains unspoiled and far less crowded than its neighbours Zakynthos and Corfu, and is thus a great option for a summer vacation.
The aim of this website is to showcase the island of Kefalonia to people looking for inspiration for their next summer holiday destination; providing useful information about the island, such as climate, towns/resorts, beaches and some of the non-beach related activities possible. 
The objective was to achieved the above in a visually appealing and interactive UX, which provides simple intuitive navigation irrespective of the device, with interactive elements which enable the user to control the discovery of information.  Ultimately, I would like this site to appeal to individuals who have previously visited Kefalonia as well as those who have never had the opportunity to visit.


[The live website can be viewed here!](https://gazzaj.github.io/CI-MS2-Discover-Kefalonia/)

![Am I responsive images](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/am-i-responsive.png "Am I Responsive")

## Table of contents
1. [User Experience](#user-experience)
2. [Features](#features)
    - [User Stories](#stories)
    - [The 5 Planes](#planes)
    - [Wireframes](#wireframes)
3. [Technologies Used](#technologies)
4. [Testing](#testing)
   - [User Story Testing](#user-story-testing)
   - [Functionality Testing](#functionality-testing)
   - [Usability Testing](#usability-testing)
   - [Responsiveness Testing](#responsiveness-testing)
5. [Bugs & Issues](#bugs)
6. [Deployment](#deployment)
7. [Resources](#resources)
8. [Credits](#credits)
    - [Acknowledgements](#acknowledgements)
9. [Technical Support](#technical)
______

## **User Experience (UX)** <a name="user-experience"></a>

I have produced a simple, yet hopefully intuitive user experience with the bulk of the website worked into a couple of key sections/pages. A single page combines information and imagery into a single interactive section focussed around a Google Map of the island. Each of the pages fills the viewport to avoid unnecessary scrolling. This layout has obviously required splitting the main map screen on mobile devices. I have used non-template: 
- Interactive navigation links
- Interactive social links section
- Map controls which provide feedback to the user

### **User Stories** <a name="stories"></a>

1. **_As a_** first time visitor, **_I need to_** understand the purpose of the site, **_in order to_** consider exploring the site any further.

2. **_As a_** first time visitor, **_I need to_** easily and quickly discover information about the island,  **_in order to_** consider Kefalonia as a potential holiday location.

3. **_As a_** user, **_I need to_** compare the destinations (towns/resorts), **_in order to_** establish where might be suitable for me/my family to stay

4. **_As a_** user, **_I need to_** establish some of the other activities possible on the island, **_in order to_** understand whether there is enough diversity to entertain my whole family.

5. **_As a _** user, **_I need to_** have a means to contact the developer/site owner, **_in order to_** discover more detailed information which may not be covered on the site.

### **The 5 Planes of UX** <a name="planes"></a>
The five planes provide a framework for discussing user experience.

#### **Strategy**  
Kefalonia is the 6th largest Greek island, yet remains much less well known as a holiday destination compared to islands like Crete, Corfu, Mykonos, Santorini.

This site bridges that gap by providing some basic, general information about Kefalonia to hopefully encourage users to learn more, and eventually enjoy the island for themselves, such as:
 - Discover more about the island of Kefalonia
 - Understand the best time of year to visit 
 - Compare the towns/resorts
 - Discover some of the best beaches
 - Learn about some of the activities possible on the island

I have used imagery as the hook to initially draw people into the site and want to find out more.

#### **Scope**  
The primary requirements for the scope are to provide interactive elements which enable the user to initiate and control actions.

##### Functional Requirements
The functionality is provided by
 - Simple pop-out navigation (only 2 main pages) rather than a more standard bootstrap template.
 - One key page/section combining all of the information accessible with interactive elements
   - Google Maps with interactive category markers linking to text and images
   - I also plan to use a weather API to obtain and chart average weather data for the island.
 - A contact page with contact form (connected to EmailJS)
 - Interactive social media links to access relevant content

##### Content Requirements
The imagery for the site has been partially drawn from my own image library and partly by using copyright free images from different sources. Typography was once again provided by Google fonts, following an exhaustive search of their library.
 
The aim of this first deployed version is to provide a MVP, which can be expanded and improved further in the future as my knowledge and experience improves.

>**_I had originally planned a fairly standard multi-section/page site with interactive elements; but having discussed this with my mentor, have elected to try to combine and incorporate all of that content one might expect in "About" and "Gallery" pages into the interactive elements of the main "Map" page._**

>**_I quickly discovered how much a of a black hole the Google Maps API can be once you get started using the code. There are so many configurable options one could very easily lose track of time and scope. Although it took more time than I would have liked I made a conscious effort to stick to the planned functionality and not extend beyond that for this first version._**

#### **Structure**  
The website is deliberately organised across two main pages (the landing page exists to create a pleasing first impression). I opted to use pages rather than sections to avoid scrolling. This results in each page existing as single entity filling the entire viewport.
Clear navigation elements exist on the top left-hand side, enabling users to navigate between pages. These are consistently located on the two main pages.
Rather than display social links in a visible footer, I decided to hide them in an interactive pop-up section which displays when a user clicks on the "Social" tab at the bottom of the page.
I opted to use minimal text to keep the display uncluttered.

##### Interaction Design
The website has been designed to be as interactive as possible, enabling the user to control what they see and when.
User interaction is controlled through:
  - Buttons with clear iconography will change their appears when the cursor hovers over them and also when clicked to indicate which is active. 
  - Anchor links will change their appears when the cursor hovers over them and also when clicked to indicate which is active.
  - Navigation elements with clear and intuitive iconography will pop out when hovered over.
  - Social Media links will be housed in a pop-up element.
>![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/muser-comment.png "User Comment")

##### Information Design
The key information will be located on the Map/Explore page and will be confined to the left had side of the display, meaning they will display first on smaller viewports. Irrespective of what is displayed the layout will remain consistent:
  - Heading
  - Image
  - Text
  - Anchor Link (where appropriate)

For mobile devices the information section displays above the map.
>**I had considered different layouts and concluded that this layout was better for devices with smaller viewports as the user would see some basic information about the destination before scrolling down to the map. The design wouldn't be as intuitive if the map displayed before the information.**

#### **Skeleton** 
The website will comprise three main pages: 
- Landing | Explore | Contact
>**_This has been intentionally reduced from a more conventional multi-section/page site._**

##### Interface Design
Presenting everything in the viewport ensures all key information is available and visible to the user without any requirement to scroll. Buttons are large enough to be obvious yet not intrusive.

##### Navigation Design
There are clear navigation links to navigate between the limited pages. I have not used standard bootstrap templates for this but instead used Javascript to provide the desired functionality. I have also used consistent colours and intuitive iconography to highlight these elements. The navigation links appear in the same place on each page 

>**_I accept I have taken a risk in electing not to use a standard navigation template provided by Bootstrap a navbar but did so due to the limited number of pages. I also wanted to experiment with Javascript to provide more interactive navigation elements_**

My initial "About" information and "Weather" data are rendered by clicking anchor links at the top of the main information section. Styling highlights indicate which information is displayed. The "About" information is displayed by default when the page loads, but can be recalled by clicking the appropriate link if required.

The map page contains buttons to drop the different categories of markers; which will again use iconography and tooltips to indicate their purpose. These will be position on the map, and will highlight when hovered and change colour when selected, so the user is clear which category of marker is displayed.

##### Information Design
I considered using the standard Google Maps information windows to display the key content (best beaches, towns/resorts and activities). However, I disliked the look of these and also didn't want this to be exclusively an exercise is using Google Maps. As an alternative to this the site displays marker information in a separate section outside of Google Maps.
The information layout will be consistent:
  - Title
  - Image/Chart
  - Body Text
  - Website link (only where appropriate)

Each piece of information consistently appears in the same position irrespective of what's being displayed.

##### Wireframes <a name="wireframes"></a>
Wireframes for the original design concepts were created using Balsamiq.
##### Landing Page
The landing page has no function other than to look enticing and to direct users to explore further.
The bulk of the website will be incorporated on the main Explore/Discover page which will house the Google Map

>**_The main change here was to incorporate what could have comprised separate pages (About, Map and Gallery) into a single page._**

![Landing Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/landing-page.png "Landing Page Wireframe")

##### Map Page
The Map page will become focal point for the website, combining interactive elements with Google map functionality. Clicking category buttons will drop Google Map markers on the Map; when each marker is clicked, information displays on the left-hand pane. This will include specific location image and information.

![Map Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/map-page.png "Map Page Wireframe")

##### Contact Page
The contact page, does what it says on the tin. It will contain a contact form which will be connected to EmailJS so users can complete the form and send an email requesting additional information. A pop-up, interactive footer section will hold links to relevant social media sites and email. I have also included a copyright statement.

![Contact Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/contact-page.png "Contact Page Wireframe")

#### **Surface**
As previously stated, I have attempted to use attractive imagery wherever possible as a conscious attempt to draw people into enjoying this website. The images are combined with fun interactive elements which hand control to the user to determine what they see and how much of the data they see.
If the user requires additional information, they are able to utilise the contact form to request it.

##### **Colour Scheme**
I searched up colour schemes reminiscent of the Greek islands and found this fantastic resource on Pinterest.
https://digitalsynopsis.com/design/colors-of-countries/

![Colour Palette](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/colour-palette.png "Colour Palette")

##### **Typography**  
I always planned to use a Greek style font for the headings, but needed the font to be easily legible. Thus, after an exhaustive search of the Google Fonts library I selected fonts which meet these criteria and still evoke images of the Mediterranean and Greek islands. I didn't want to choose anything too formal as this is not a business site and can be a bit more playful in it's design. I thus chose the following fonts:
 - ![Caesar Dressing](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/caesar-dressing.png "Caesar Dressing font")
 - ![Cinzel Decorative](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/cinzel-decorative.png "Cinzel Decorative font")

I selected **_Caesar Dressing_** for my main H1 and H2 Headings; and **_"Cinzel Decorative"_** for smaller headings as this has a classical look to it without being to complicated. The main text uses **_"Raleway"_** which is a nice legible and clear font which pairs reasonably well with Cinzel Decorative.

##### **Imagery** 
My intent was always to try and rely heavily on imagery to convey the beauty of Kefalonia as a means of enticing the user to want to discover more. I wanted to showcase the stunning beaches, quaint towns and diverse activities all with the backdrop of the island and it's gorgeous weather.
I have used a mixture of my own images, and copyright free images sourced from WikiMedia Commons, Flickr and Pixabay. A full list of images can be found in the <a name="media"></a> section

Here is a user comment from Slack Community validating the 
![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/jmuser-comment.png "User Comment")
______

## **Features** <a name="features"></a>
What follows is a list of the main features incorporated into the website, and a short list of upgrades which could be applied once my knowledge of other technologies like JavaScript has increased.

### **Existing Features**
This is an interactive website comprising three pages linked by simple interactive navigation elements; Landing | Map | Contact.
- The landing page exists to simply show an enticing image and to direct the user to "Start Exploring".
![Landing Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/landing-page.jpg "Landing Page View")

- I chose to create custom navigation links, which comprise two pop-out elements, linking the user to their respective pages.

![Navigation](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/nav-links.png "Navigation Links")

 > **I had experimented with a fixed position for my navigation on smaller devices, making the two menu items float over the body content and stay in position when the page is scrolled but chose to fix the navigation elements towards the top of the viewport where they are less likely to get in the way of the main body content.**
 
- The MAP page contains the bulk of the information provided by this website; and is split into an information section on the left and map section on the right.
![Map Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/map-poi.png "Map Page")

  - There are interactive "About" and "Weather" links which display the respective information.
  - **Weather data is provided by WeatherOnline.co.uk and is accessed via a REST API provided by Rapid API**.
  - **The weather data is charted using a combined bar and line chart using Chart.js**

![Weather Data](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/chart-js.png "Rest API Weather Data")

- I have provided buttons on the map to display different categories of points of interest: Beaches, Towns/Resorts and Activities

![Map Buttons](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/map-buttons.png "Map Buttons")

- When the user interacts with the map buttons, they will display markers for the respective "Points of Interest" category
![Map Markers](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/map-markers.png "Map Markers")

- When the user clicks a marker, the relevant information is rendered into the Information section; with a heading, image and detailed text. Thus, enabling the user to interact with each marker to discover more information about each location.

- The contact page does what is says on the tin; comprising a simple contact form linked to the EmailJS service.

![EmailJS](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/contact-emailjs.png "EmailJS Integration")

- The footer elements are built into a pop-up element at the base of the Map and Contact pages. 
![Footer](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/social-tab.png "Footer Tab")
 The Footer contains links to social media sites relevant to Kefalonia and also displays the copyright and a link to contact the developer.
![Social Links](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/popup-footer.png "Footer Contents")

### **Features Left to Implement**
I am satisfied with the initial deployed functionality; however, the following items would add to the current site.
- Address the poor Google Lighthouse mobile device performance score.
![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/google-lighthouse-mobile.png "User Comment")
- Non-native tooltips to the map buttons to highlight their intended purpose.
- A connection to a holiday/flight booking API to this site.

______

## **Technologies Used** <a name="technologies"></a>  

This website has been built using the following core technologies:

##### Core Coding languages

- ![HTML 5](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/html-5-logo.png "HTML5") - HTML5
- ![CSS3](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/css3-logo.png "CSS3") - CSS3
- ![Javascript](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/javascript.png "Javascript") - Javascript

##### Integrations

- ![Bootstrap 4](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/bootstrap-logo.png "Bootstrap 4") - Bootstrap 4
- ![Font Awesome](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/fontawesome-logo.png "Font Awesome") - Font Awesome was the source of all icons.
- ![Google Fonts](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/googlefonts-logo.png "Google Fonts") - Fonts used on the website courtesy of Google Fonts
- ![JQuery](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/jquery.png "JQuery") - The project uses JQuery to simplify DOM manipulation.
- ![RapidAPI](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/rapid-api.jpg "RapidAPI") - RapidAPI
- ![Chart.js](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/chartjs.png "Chart.js") - Chart.js
- ![EmailJS](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/emailjs.png "EmailJS") - EmailJS

##### Version Control, storage and hosting

- ![Gitpod](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/gitpod-logo.png "Gitpod logo") - All of the website's code was written in the Gitpod IDE.
- ![Git](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/git-logo.png "git logo") - used for maintaining version control of the saved files.
- ![GitHub](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/github-logo.png "Github logo") - used as the primary repository for storying the files and documentation.

##### Other
- Green Sock Animation Platform - experimented with animated button on landing page
- Hover.css for button hover effects
- Dillinger was once again used to edit the markdown required for the README file.
______

## **Testing** <a name="testing"></a>

### **User Story Testing** <a name="user-story-testing"></a>
The following testing has been carried out to validate how the website addresses each of the user stories:
|User Story|Desctiption|Testing|
|:--------:|-----------|-------|
|1|As a first time visitor, I need to understand the purpose of the site, in order to consider exploring the site any further. |Site Title is self-descriptive "_Discover Kefalonia_". Main Map page sub heading also explains the site is "_A brief guide to Kefalonia_"|

![Landing Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/landing-page.jpg "Landing Page View")
![Map Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/map-page.jpg "Map Page View")


|User Story|Desctiption|Testing|
|:--------:|-----------|-------|
|2|As a first time visitor, I need to easily and quickly discover information about the island, in order to consider Kefalonia as a potential holiday location.|Testing performed, indicates that with one one click the user can start to learn about the island. The more they chose to select the more they can learn|

![Weather Info](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/weather-info.jpg "Weather Info View")
![Beach Info](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/poi-info.jpg "Beach Info View")
![User Feedback](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/ecuser-comment.jpg "Weather User Feedback")


|User Story|Desctiption|Testing|
|:--------:|-----------|-------|
|3|As a user, I need to compare the destinations (towns/resorts), in order to establish where might be suitable for me/my family to stay|Testing performed to validate useful information exists for main resort towns|

![Town Info](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/town-info.jpg "Town Info View")
![User Feedback](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/ftuser-comment.png "POI User Feedback")

|User Story|Desctiption|Testing|
|:--------:|-----------|-------|
|4|As a user, I need to establish some of the other activities possible on the island, in order to understand whether there is enough diversity to entertain my whole family.|Performed testing to ensure there is information displayed regarding activities and they represent a diverse offering.|

![Activity Info](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/activity-info.jpg "Activity Info View")
![User Feedback](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/kmuser-comment.jpg "Activity user feedback")

|User Story|Desctiption|Testing|
|:--------:|-----------|-------|
|5|As a user, I need to have a means to contact the developer/site owner, in order to discover more detailed information which may not be covered on the site.|Testing performed on Contact form to ensure it functions correctly and provides feedback to the user (auto-reply)|

![Contact Page](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/contact-form.jpg "Contact Page view")

### **Functionality Testing** <a name="functionality-testing"></a>
The following table captures the functional testing performed on the website to ensure it works as desired. I have tested on the listed browsers only using Windows version 1909 (OS Build 18363.1256), and have not conducted any backward compatibility testing in older browser versions.

|   Test       |Purpose          | Desired Result | Actual Result | Chrome v 87.0.4280.88 | Firefox v 83.0 (64-bit) |
|:------------:|-----------------|----------------|---------------|:------:|:-------:|
|   001        | Test Navigation |Navigate to MAP Page using "Explore" button| Correctly navigates to the MAP Page| **PASS** | **PASS** |
|   002        | Test Navigation |Navigate from MAP to Landing Page using "Home" nav item| Navigate to the correct page |**PASS**| **PASS** |
|   003        | Test Navigation |Navigate from the MAP to the CONTACT Page using the "Contact" nav item| Navigate to the correct page |**PASS**| **PASS** |
|   004        | Test Navigation |Navigate from Contact to the Landing page using the "Home" nav item| Navigate to the correct page |**PASS**| **PASS** |
|   005        | Test Navigation |Navigate from the Contact to the Map using the "Explore"| Navigate to the correct page |**PASS**| **PASS** |
|   006        | Map Button functionality |The "Beaches" button displays beach markers| Markers for the beaches drop correctly |**PASS**| **PASS** |
|   007        | Map Button Functionality |The "Towns/Resorts" button displays town markers| Markers for the towns/resorts drop correctly |**PASS**| **PASS** |
|   008        | Map Button Functionality |The "Activities" button displays activity markers| Markers for the activities drop correctly |**PASS**| **PASS** |
|   009        | Map Button Functionality |Any previous markers clear when a new set of markers is selected and dropped.| Markers clear correctly |**PASS**| **PASS** |
|   010        | Map Button Functionality |The "Zoom Out" button recentres the map and resets the zoom to display the whole island.| Zoom works as desired |**PASS**| **PASS** |
|   011        | Weather API Data |"Weather" anchor link displays the whether data and associated text| Chart renders and text displays below |**PASS**| **PASS** |
|   012        | Console Error handling  |Are there any Errors - Is there an appropriate message?| No Errors displayed |**PASS**|
|   013        | Map Button Functionality |"About" anchor link re-displays the general information and image| Information renders correctly |**PASS**| **PASS** |
|   014        | Map Button styles |Button Hover styles render correctly| Markers clear correctly |**PASS**| **PASS** ||
|   015        | Map Button styles |Button styles toggle correctly when selected/clicked | Button styles display correctly |**PASS**| **PASS** |
|   016        | Map Button styles |Button styles toggle when another button is selected | Button styles toggle as desired |**PASS**| **PASS** |
|   017        | Test Navigation |Social media links on Contact page should all open in a new tab and navigate to the correct page| Navigate to the correct page |**PASS**| **PASS** |
| 018          | Test Hyperlinks |Hyperlinks for the Map activities should be active and open in a new tab| All links function (at time of test) and open in a new tab | **PASS**| **PASS**|
| 019          |Contact Form|Ensure all Text input fields are required|A tooltip appears for any empty field when the "Submit" button is clicked|**PASS**|**PASS**|
|020           |Contact Form|Check valid email address format is required|Users are required to input a valid email address and a tooltip appears if this is not the case|**PASS**|**PASS**|
| 021          |Contact Form|Ensure the Contact Form CANNOT be submitted with out filling in the required fields|Message appears if the submit button is clicked without text in the required fields|**PASS**|**PASS**|
| 022          |Contact Form|Evaluate user feedback on contact form|Submit button changes colour on click. User receives a personal auto reply from EmailJS|**PASS**|**PASS**|
|023           |Contact Form|Confirmation in console that Email JS API working correctly|Console displays status 200 and SUCCESS if OK and the error response if not|**PASS**|**PASS**|

The philosophy I have used throughout this build is to code, review and test each part of the website as I progressed, relying heavily on Google Dev tools throughout, for first pass testing.

### **Code Quality and Validation** <a name="code-validation"></A 
|Test|Process|Result| Comment |
|----|-------|:----:|---------|
|HTML Validation| Copy Index.html code into W3C validator|PASS||
|HTML Validation| Copy Map.html code into W3C validator|PASS||
|HTML Validation| Copy Contact.html code into W3C validator|WARNING|The "type" is unnecessary for Javascript results from 3rd party Script tags|
|HTML Validation| Copy 404.html code into W3C validator|PASS||
|Javascript Validation| Copy index.js code into JSHint|CHECKED||
|Javascript Validation| Copy map.js code into JSHint|CHECKED||
|Javascript Validation| Copy cndex.js code into JSHint|CHECKED||
|CSS Validation| Copy CSS code into WC3 validator| ERROR |Errors raised for webkit compatibility. Chosen to ignore| 

- I deployed the website to Git Pages and started viewing the output on several real devices:
  - Samsung Galaxy S9
  - Samsung Tab A
  - HP Laptop with attached monitor
This helped me make some changes to maintain responsiveness. 

- Spelling Checked using [Typosaurus](https://typosaur.us/)
- [CSS Auto Prefixer](https://autoprefixer.github.io/) - CSS file checked 
- Mobile Friendly Test - [PASS](https://search.google.com/test/mobile-friendly?id=8jZoJWUliCuw3Bdmly-IwA)
- README.md file spelling checked by copying and pasting the text into word.


### **Usability Testing** <a name="usability-testing"></a>"
I requested fellow CI students and former colleagues to test the website to gather their feedback on the User Experience and Interactivity. What follows are the comments I received in return:
![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/jmuser-comment.png "User Comment")

![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/ftuser-comment.png "User Comment")

![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/muser-comment.png "User Comment")


![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/ekuser-comment.png "User Comment")

![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/ecuser-comment.jpg "User Comment")

![User Comment](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/kmuser-comment.jpg "User Comment")

### **Responsiveness Testing** <a name="responsiveness-testing"></a>
I have conducted continuous responsiveness testing to ensure the website functions on different devices using:
 - Google Devtools
![Responsiveness](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/poi-info.jpg "Website Responsiveness") 
![Responsiveness](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/contact-form.jpg "Website Responsiveness")
 - Am I Responsive
![Am I responsive images](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/am-i-responsive.png "Am I Responsive")

### **Performance Testing** <a name="performance-testing"></a>
The website has been performance testing using the following tools:
 - Google Lighthouse (Desktop)
 - 
 
![Google Lighthouse](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/google-lighthouse.png "Google Lighthouse Testing")



 - Google Lighthouse (Mobile)
 - 
 
![Google Lighthouse](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/google-lighthouse-mobile.png "Google Lighthouse Testing")


______

## **Bugs and Issues** <a name="bugs"></a>
- The contact form not connecting with EmailJS.

This has been an on / off occurrence ever since I have completed the Contact form. The Devtools Console didn't appear to be displaying any errors; however, on closer inspection an error did flash up but was immediately cleared. I had to video the Console while clicking submit to catch the error.
Research on Stackoverflow confirmed this was likely linked to:
   - The form clearing itself on "Submit"
I subsequently traced this to: 
   - My Javascript code for EmailJS
![EmailJS Error](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/emailjs-error.jpg "EmailJS Error")

I was originally using the code provided in the EmailJS documentation, but this resulted in similar errors. I subsequently adapted the CI Code, from the EMail JS walk through, combined with the Email JS code to try and solve the error.
The solution was to use the Email JS code, but to add **onsubmit = "return false;"** to the Form Tag.
![Console Success](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/emailjs-success.jpg "Console Success")

![Email JS Status 200](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/emailjs-status200.png "Email JS Status 200")

![Gmail Confirmation](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/emailjs-confirm.png "Gmail Confirmation")

-  The biggest challenge I had while building the website was in achieving the desired functionality of clearing existing markers when a new set was dropped. There was quite a bit of documentation covering the basics of using markers, including an excellent _How To_ guide produced by Eamonn Smyth.


-  Devtools Scrolling from information section onto the map is disjointed.
When inspecting the website on Google Devtools it takes a second or two for the page to transition/scroll between the Information pane and the map.
I believe this to be the result of the overflow: auto style I have applied to the poi-text div for mobile devices and is confined to Devtools functionality. This delay DOES NOT occur on actual mobile devices. There is a stop as the text finishes scrolling and the map scrolls as you continue to scroll. The double scroll bars are visible on actual devices, but can be seen on this Responsiveness test.

![EmailJS Error](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/devtools-scroll.png "EmailJS Error")

______

## **Deployment** <a name="deployment"></a>

### **GitHub Pages**
The project was deployed to GitHub Pages using the following steps
- Logging in to GitHub and locating the GitHub Repository
- Clicking the "Settings" Button in the menu tabs.
- Within the Settings page scrolling down until the "GitHub Pages" section was located.
- Under the "Source" heading there is a dropdown menu. The "Master Branch" was selected.
- The newly created website address is now displayed in the box at the top of the Github Pages section.

There is no difference between the developed version and that deployed on Git Hub Pages

### **Forking the GitHub Repository**
By forking the GitHub Repository you can make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

- Log in to GitHub and locate the GitHub Repository
- At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
- You should now have a copy of the original repository in your GitHub account.
### **Making a Local Clone**
- Log in to GitHub and locate the GitHub Repository
- Under the repository name, click "Clone or download".
- To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
- Open Git Bash
- Change the current working directory to the location where you want the cloned directory to be made.
- Type git clone, and then paste the URL you copied in Step 3.
______

## **Resources** <a name="resources"></a>

I have attempted to work independently as much as possible while building this website, choosing to solve my own issues, using web resources wherever possible. Thus, my main resource throughout this project was again the trusty Google search.
 Aside from Google I have made use of the following resources: -

- [Balsamiq](https://balsamiq.com/wireframes/) – Wireframing Tool
- Code Institute course material and Walkthrough projects
- Google DevTools - for trouble shooting and first pass testing
- Google Lighthouse - Website performance testing
- [StackOverFlow](https://stackoverflow.com/) – Web based coding tips
- [CSS Tricks](https://css-tricks.com/) – Styling tips like https://css-tricks.com/styling-underlines-web/
- [W3Schools](https://www.w3schools.com/) – General coding resource
- [MDN]("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
- [Pexels](https://www.pexels.com/) – Licence free image repository
- [BeFunky](https://www.befunky.com/create/resize-image/) – Online image resizer
- [Color Picker](https://htmlcolorcodes.com/color-picker/) – HTML and CSS colour codes
- [W3C Validator](https://validator.w3.org/) - HTML and CSS Validation tool
- [JSHint](https://jshint.com/) - Javascript code analysis tool
- [JSLint](https://jslint.com/) - Javascript code quality analysis tool
- [SEO Site Checkup](https://seositecheckup.com/tools/custom-404-error-page-test) - Checks to see if you have a custom 404 page
- [Online Javascript Beautifier](https://codebeautify.org/jsviewer) - Useful tool for indenting JS code
- [Am I responsive?](http://ami.responsivedesign.is/) - provides a simple view of a websites responsiveness.

______

## **Credits** <a name="credits"></a>

### **Content**
The content of this website was created by Gareth John. Snippets of code have been taken from official documentation and sources creditted below and in the respective code files. All text was written  by the developer having researched the island. Image credits are provided in the following section.

### **Media**

The photos used in this site were obtained from the folloing sources:
|    Image    |       Source     | Credit |
|-------------|------------------|--------|
|Petani Beach |Wikimedia Commons|By Matt Sims - originally posted to Flickr as Petanί Beach, Kefalloniá, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=6599113|
|Xi Beach|Wikimedia Commons|By Splendid entry - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5395934|
|Skala Beach|Wikimedia Commons|By Matti - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16480114|
|Emplisi Beach|Wikimedia Commons|By Fæ, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=21096992|
|Dafnoudi Beach|Wikimedia Commons|By Fæ, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=21050072|
|Skala Town|Wikimedia Commons|By Matti - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16479612
|Argostolion Town|Flickr|Alan Wainwright https://www.flickr.com/photos/alanwainwright/3613628592/in/album-72157619533403498/
|Lixouri Town|Flickr|Saxon Sky - https://www.flickr.com/photos/7368063@N06/21684399156/in/album-72157636944666226/|
|Lassi Town|Flickr|Alan Wainwright - https://www.flickr.com/photos/alanwainwright/3613795342/in/album-72157619456351483/|
|Assos Town|Pixabay|Free to download  - no attribution required|
|Poros Town|Flickr|Alan Wainwright - https://www.flickr.com/photos/alanwainwright/3610823949/in/album-72157619500077238/|
|Sami Town|Flickr|Kokomo-65 on Flickr - https://www.flickr.com/photos/54995036@N08/5089279047/|
|Robola Winery|Flikr|cegefoto https://www.flickr.com/photos/67865224@N06/27032175804/in/album-72157654235244675/|
|Wild Expeditions|Pixabay|Free to download  - no attribution required|
|Bavarian Horse Riding|Flickr|Kalypso Studios & Apts -  https://www.flickr.com/photos/kalypso-apts/12100332456/in/album-72157640073047804/|

- All other images came from my own personal image library

### **Code Snippets**
The code I use to deploy and clear the Google maps markers has been adapted from the Google Maps API Developer documentation , Eamonn Smyth's "How To Google Maps" document (circulkated on Slack) and augmented with questions submitted to StackOverflow.
- Google Maps Developer Documents - https://developers.google.com/maps/documentation/javascript/markers
- Clearing Google Markers - https://developers.google.com/maps/documentation/javascript/examples/marker-remove

The following resources were also used to provide functionality to the website:
- Slide out side menu adapted from - https://www.w3schools.com/howto/howto_css_sidenav_buttons.asp
- API code for weather data - https://rapidapi.com/weatheronline/api/climate-data
- 404 Redirect javascript code taken from (https://html-online.com/articles/smart-404-error-page-redirect/)
- Chart JS Documentation - https://www.chartjs.org/docs/latest/
- EmailJS Documentation - https://www.emailjs.com/docs/
- GSAP Tutorial - https://greensock.com/docs/

### **Acknowledgements** <a name="acknowledgements"></a>
- Thanks again to my mentor Sinead O'Brien for her direct and honest feedback, support and helpful advice in the run up to, and during this project. With your help I aim to become a useful developer.

- I'd like to acknowledge the help and encouragement I received during this project from :-
  - Eamonn Smyth
  - Haley Schafer
  - Johann Alberts
  I was banging my head against the wall trying to achieve my desired Google Map marker functionality and all three contributed in some way to helping me clear my head and eventually achieve my goal. Thanks again!

- I'd like to thank the following individuals for testing this website and providing feedback:
  - Jim Morel
  - Fabio Torti
  - Evka K
  - Michael McCann
  - Eamonn Carroll
  - Kane Moore

- Thanks as always to everyone at the Code Institute for the excellent video tutorials and fantastic introduction to Javascript, Jasmine and RESTful API's.

______
### **Technical Support** <a name="technical"></a>
If you encounter any issues with this website, or require any support please email the developer [johnge71@gmail.com](mailto:johnge71@gmail.com)