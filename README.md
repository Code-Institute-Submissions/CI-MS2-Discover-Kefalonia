# [**Discover Kefalonia**](https://gazzaj.github.io/CI-MS2-Discover-Kefalonia/)

Kefalonia is the largest of the Greek Ionian islands, and is a popular holiday destination for many Europeans. Despite this it remains unspoilled and far less crowded than it's neighbours Zakynthos and Corfu, and is thus a great option for a summer vacation.
The aim of this website is to showcase the the island of Kefalonia to people looking for inspiration for their next summer holiday destination; providing useful information about the island, such as climate, towns/resorts, beaches and some of the non-beach related activities possible. 
My objective is to achieved the above in a visually appealing and interactive UX, which provides simple intuitive navigation irrespective of the device, with interactrive elements which enable the user to control the discovery of information.  Ultimately I would like this to appeal to individuals who have previously visited Kefalonia as well as those who have never had the opportunity to visit.

[The live website can be viewed here!](https://gazzaj.github.io/CI-MS2-Discover-Kefalonia/)

![Am I responsive images](https://github.com/GazzaJ/ "Am I Responsive")

## Table of contents
1. [User Experience](#user-experience)
2. [Features](#features)
    - [User Stories](#stories)
    - [The 5 Planes](#planes)
    - [Wireframes](#wireframes)
3. [Technologies Used](#technologies)
4. [Testing](#testing)
5. [Bugs & Issues](#bugs)
6. [Deployment](#deployment)
7. [Resources](#resources)
8. [Credits](#credits)
    - [Acknowledgements](#acknowledgements)
9. [Technical Support](#technical)
______

## **User Experience (UX)** <a name="user-experience"></a>

I am planning to achieve a simple, yet hopefully intuitive user experience with the bulk of the website worked into a couple of key sections/pages. A single page will combine information and imagery into a single interactive section focussed around a Google Map of the island. Each page will fill the viewport to avoid unnecessary scrolling. The layout will obviously require splitting the main map screen on mobile devices. I plan to incorporate non-template: 
- Interactive navigation links
- Interactive social links section
- Map controls which provide feedback to the user

### **User Stories** <a name="stories"></a>

1. **_As a_** developer, **_I need to_** provide a simple and intuitive UX, **_in order to_** allow users to easily interact with the site.

2. **_As a_** developer, **_I need to_** use attractive imagery and reliable information, **_in order to_** entice the user to  discover more about the island and spend more time interacting with the site.

3. **_As a_** developer, **_I need to_** provide a form , **_in order to_** enable the users to contact the site owner to enable more detailled interactions to occur.

4. **_As a_** first time visitor, **_I need to_** understand the purpose of the site, **_in order to_** consider exploring the site any further.

4. **_As a_** first time visitor, **_I need to_** easily and quickly discover information about the island,  **_in order to_** consider Kefalonia as a potential holiday location.

5. **_As a_** user, **_I need to_** compare the destinations (towns/resorts), **_in order to_** establish where might be suitable for me/my family to stay

6. **_As a_** user, **_I need to_** establish some of the other activities possible on the island, **_in order to_** understand whether there is enough diversity to entartain my whole family.

7. **_As a _** user, **_I need to_** have a means to contact the developer/site owner, **_in order to_** discover more detailled information which may not be covered on the site.

### **The 5 Planes of UX** <a name="planes"></a>
The five planes provide a framework for discussing user experience.

#### **Strategy**  
Kefalonia is the 6th largest Greek island, yet remains much less well known as a holiday destination compared to islands like Crete, Corfo, Mykonos, Santorini. The positive side is that the island is not crowded and over developed. The down side is that unless people get a recommendation they won't get to discover the beatutiful beaches, friendly people and diverse landsacpes which make Kefalonia such a holiday paradise.

The intention of the site is to bridge that gap by providing some basic, general information about Kefalonia to hopefully encourage users to learn more, and eventually enjoy the island for themselves, such as:
 - Discover more about the island of Kefalonia
 - Understand the best time of year to visit 
 - Compare the towns/resorts
 - Discover some of the best beaches
 - Learn about some of the activities possible on the island

I plan to use imagery as the hook to initially draw people into the site and want to find out more.

#### **Scope**  
The primary requirements for the scope are to provide interactive elements which enable the user to initiate and control actions.

##### Functional Requirements
The functionality will be provided by
 - Simple pop-out navigation (only 2 main pages) rather than a more standard bootstrap template.
 - One key page/section combining all of the information accessible with interactive elements
   - Google Maps with interactive category markers linking to text and images
   - I also plan to use a weather API to obtain and chart average weather data for the island.
 - A contact page with contact form (conected to EmailJS)
 - Interactive social media links to access relevant content

##### Content Requirements
The imagery for the site will be partially drawn from my own image library and partly by using copyright free images from different sources. Much of the text used can be creditted to a collection of greek tourism sites. Typography was once again provided by Google fonts, following an exhaustive seach of their library.
 
The aim of this firt deployed version is to provide a MVP, which can be expanded and further improved in the future as my knowledge and experience improves.

>**_I had originally planned a fairly standard multi-section/page site with interactive elements; but having discussed this with my mentor, have elected to try to combine and incorporate all of that content one might expect in "About" and "Gallery" pages into the interactive elements of the main "Map" page._**

>**_I quickly discovered how much a of a black hole the Google Maps API can be once you get started using the code. There are so many configurable options one could very easily lose track of time and scope. Althought it took more time than I would have liked I made a conscious effort to stick to the planned functionality and not extend beyond that for this first version._**

#### **Structure**  

##### Interaction Design

##### Information Design


#### **Skeleton** 
The website will comprise three main pages: 
- Landing | Explore | Contact
>**_This has been intentionally reduced from a more conventional multisection/page site._**

##### Interface Design
Presenting eveything in the viewport ensures all key information is available and visible to the user without any requirement to scroll. Buttons are large enough to be obvious yet not intrusive.
##### Navigation Design
There will be clear navigation links to navigate between the limited pages. I may not use standard bootstrap templates for this but instead use Javascript to provide the desird functionality. I will use bright colours and iconography to highlight these elements. The navigation links will appear in the same place on each page and will have consistent colours.
>**_I accept I have taken a risk in electing not to use a standard navigation template provided by Bootstrap a navbar but did so due to the limited number of pages. I also wanted to experiment with Javascript to provide more interactive navigation elements_**

My initial "About" information and "Weather" data will be generated by clicking anchor links at the top of the main information section. Styling highlights indicate which information is displayed.
The "About" information is displayed by default when the page loads, but can be recalled by clicking the appropriate link if required.

The map page will have buttons to drop the different categories of markers; which will again use iconography and tooltips to indicate their purpose. These will be position on the map, and will highlight when hovered and change colour when selected, so the user is clear which category of marker is displayed.

##### Information Design
I had considered using the standard Google Maps information windows to display the key content (best beaches, towns/resorts and activities). However, I disliked the look of these and also didn't want this to be exclusively an exercise is using Google Maps and thus plan to display marker information in a separate section outside of Google Maps.
The information layout will be consistent:
  - Title
  - Image/Chart
  - Body Text
  - Website link (only where appropriate)

Each piece of information will consistently appear in the same position irrespective of what's being displayed.

##### Wireframes



The landing page has no function other than to look enticing and to direct users to explore further.
The bulk of the website will be incorporated on the main Explore/Discover page which will house the Google Map

>**_The main change here was to incorporate what could have comprised separate pages (About, Map and Gallery) into a single page._**

A pop-up, interactive footer section will hold links to relevant social media sites and email. I have also included a copyright statement.

#### **Design Concept Wireframes** <a name="wireframes"></a>
Wireframes for the original design concepts were created using Balsamiq, and can be viewed using the links below:
- [Home Page](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/original-landing--page.png)
  - [Alternate Home Page](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/alternate-landing--page.png)
- [Experience Page](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/preferred-experience-page.png)
  - [Alternate Experience Page](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/alternate-experience--page.png)
- [Portfolio Page](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/portfolio-page.png)
- [Contact Page](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/contact-page.png) 

As mentioned in the Scope section I created multiple design concepts to reflect my different design ideas. 
 - I have adapted aspects of each page design during the build to suit the purpose, without losing sight of the original goal.

#### **Surface**
As previously stated I am trying use use beautifull imagery wherever possible as a conscious attempt to draw people into enjoying this website. The images are combines with fun interactive elemets which hand control to the user to determine what they see and how much of the data they see.
If there is additional information they require they can utilise the contact form to request more.

##### **Colour Scheme**
I searched up colour schemes reminisent of the Greek islands and found the following group on Pinterest. Websites](https://www.shutterstock.com/blog/10-gorgeous-color-schemes-for-websites?kw=&gclsrc=aw.ds&gclid=Cj0KCQjw2or8BRCNARIsAC_ppyaGHtDUv5oNSHP0th9gb8N6VBiGFAq-pYu1cFQFW5szceQETvoAnKgaAhwPEALw_wcB)
- [10 Trending 2020Website Color Schemes](https://www.quicksprout.com/trending-website-color-schemes/)



##### **Typography**  
I had always planned to use a greek style font for the headings, but needed the font to be easily legible. After an exhaustive search of the Google Fonts library I selected fonts which meet these criteria and still envoke images of the medetaranean and Greek islands. I didn't want to choose anything too formal as this is not a business site and can be a bit more playful in it's design. I thus Chose **_"Ceasar Dressing"_** for my main H1 and H2 Headings; and **_"Cinzel Decorative"_** for smaller headings as this has a classical look to it without being to complicated. The main text uses **_"Raleway"_** which is a nice legible and clear font which pairs reasonably well with Cinzel Decorative.

##### **Imagery** 
My intent was always to try and rely heavily on imagery to convey the beauty of Kefalonia as a means of enticing the user to want to discover more. I wanted to showcase the stunning beaches, quaint towns and diverse activities all with the backdrop of the island and it's gorgeous weather.
I have used a mixture of my own images, and copyright free images sourced from WikiMedia Commons, Flickr and Pixabay.


______

## **Features** <a name="features"></a>
What follows is a list of the main features incorporated into the website, and a short list of upgrades which could be applied once my knowledge of other technologies like JavaScript has increased.

### **Existing Features**
- This is an interactive website comp[rising three pages linked by simple interactive navigation elements; Landing | Map | Contact.
   - The landing page exists to simply show an enticing image and to direct the user to "Start Exploring".
   - The MAP page contains the bulk of the content which is revealed through the interactive button elements.
     - Information pane which displays images and information about each lovation on the map
     - Interactive "About" and "Weather" links which display the respective information.
     - **Weather data is provided by WeatherOnline.co.uk and is accessed via a REST API provided by Rapid API**.
     - **The weather data is charted using a combined bar and line chart using Chart.js**
     - The second half of this page houses the custom Google map, which 
       - retains some of the native interactive features to select the map style.
       - incorporates interactive buttons to place three categories of marker
       - enables the user to interact with each marker to discoved more information about each location
   - The contact page does what is says on the tin; comprising a simple contact form linked to the EmailJS service.
- I chose to create custom navigation links, which comprise two pop-out elements, linking the user to their respectibe pages.
 > **I had experimented with a fixed position for my navigation on smaller devices, making the two menu items float over the body content and stay in position when the page is scrolled but chose to fix the navigation elements towards the top of the viewport wherer they are less likely to get in the way of the main body content.**
- The footer elements are built into a pop-up element at the base of the Map and Contact pages. The Footer contains links to social media sites relevant to Kefalonia and also displays the copyright and a link to contact the developer.

### **Features Left to Implement**

- I 

______

## **Technologies Used** <a name="technologies"></a>  

This static website has been built using the following core technologies:

Core coding languages

- ![HTML 5](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/html-5-logo.png "HTML5") - HTML5
- ![CSS3](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/css3-logo.png "CSS3") - CSS3
- ![Javascript]("https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/javascript.png") - Javascript

Integrations

- ![Bootstrap 4](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/bootstrap-logo.png "Bootstrap 4") - Bootstrap 4
- ![Font Awesome](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/fontawesome-logo.png "Font Awesome") - Font Awesome was the source of all icons.
- ![Google Fonts](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/googlefonts-logo.png "Google Fonts") - Fonts used on the website courtesy of Google Fonts
- JQuery - The project uses JQuery to simplify DOM manipulation.
- Hover.css for button hover effects
- 
- JQuery
- RapidAPI
- ![Chart.js](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/chartjs.png "Chart.js") - Chart.js
- ![EmailJS]("") - EmailJS

Version Control, storage and hosting

- ![Gitpod](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/gitpod-logo.png "Gitpod logo") - All of the website's code was written in the Gitpod IDE.
- ![Git](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/git-logo.png "git logo") - used for maintaining version control of the saved files.
- ![GitHub](https://github.com/GazzaJ/CI-MS2-Discover-Kefalonia/blob/master/readme-img/github-logo.png "Github logo") - used as the primary repository for storying the files and documentation.

Other

- Dillinger was once again used to edit the markdown required for the README file.
______

## **Testing** <a name="testing"></a>

### **User Story Testing**
### **Functional Testing**
The philosophy I have used throughout this build is to code, review and test each part of the website as I progressed, relying heavily on Google Dev tools throughout, for first pass testing.

- Repeatedly tested the 'navbar' links throughout development to ensure correct navigation.
- I used DevTools extensively during development, changing devices, to ensure the desired responsive behaviour was achieved.
  - This helped to highlight an issue I had with Divs and whitespace on the right hand side.
- Once roughly 50% complete I deployed the website to Git Pages and started viewing the output on several real devices:
  - Samsung Galaxy S9
  - Samsung Tab A
  - HP Laptop with attached monitor
- I tested the functionality of the 'accordion' feature on the Experience page on these devices to ensure aesthetics and functionality were maintained.
  - This helped me make some changes to maintain responsiveness. 
- Repeatedly tested all hyperlinks to ensure they function and correctly open up the required sites in new browser tabs.
  - The exception to this is the "get in touch" hyperlink on the 'Portfolio' page, considering this only navigates to one of the other pages on the same website rather than another website. On reflection it didn't seem appropriate for this to open a duplicate website on another page.
- Tested Social Media icon to ensure they also link to the correct sites and open in new browser tabs.
- I have tested email links to ensure they open up the default email application and insert the email address.
  - Works on Samsung S9 – opening Gmail
  - Laptop – opening Outlook
- I have tested the Portfolio Project card links on laptop and Samsung Galaxy S9 and they correctly open in new browser tabs.
- Tested the contact form on the Contact page to ensure correct functionality. This was linked to the CI Form dump page so I could verify the data sent.
- Testing of the 'required' attribute which ensures all contact form fields get filled in before the data can be sent.
- I have tested the email address entry on the Contact form to ensure correctly formatted email addresses can be entered e.g [_name@something.com_](mailto:name@something.com)
- Accessibility Test
  - Highlighted potential issue with the choice text colour on the navbar, hyperlinks and Copyright section
    - Navbar text changed to a darker colour
    - Hyperlink colour changed to a darker blue for increased contrast
    - Copyright text changed to a darker colour to provide contrast.
- Spelling Checked using [Typosaurus](https://typosaur.us/)
- HTML Validation
  - Each page has been checked and all errors have been corrected.
- CSS Validation
  - Returned several errors related to the use of vendor extensions. I have chosen to accept these errors based on the fact they increase compatibility. [Stack Overflow](https://stackoverflow.com/questions/52490004/what-are-all-of-these-w3c-css-validation-warnings-about)

- [CSS Auto Prefixer](https://autoprefixer.github.io/) - CSS file checked 
- Mobile Friendly Test - [PASS](https://search.google.com/test/mobile-friendly?id=8jZoJWUliCuw3Bdmly-IwA)
- [Website speed test](https://www.webpagetest.org/result/201020_DiS2_d82b833e59172a62a58b4c1a1ccb5856/) where it passed in all but Security and Cache static content.
- README.md file spelling checked by copying and pasting the text into word.
- I forwarded the link to the website to friends to view and provide feedback. This was initially done at about 75% complete and again once 100% complete. I documented the procedure and the subsequent feedback in a [User Testing Document](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/user-testing-feedback-ms1.pdf).
- I also submitted my site for a "Peer Code Review" in the Code Institute Slack community on 19-Oct-20, unfortunately I did not receive any feedback.

______

## **Bugs and Issues** <a name="bugs"></a>

-  The biggest challenge 
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
- [StackOverFlow](https://stackoverflow.com/) – Web based coding tips
- [CSS Tricks](https://css-tricks.com/) – Styling tips like https://css-tricks.com/styling-underlines-web/
- [W3Schools](https://www.w3schools.com/) – General coding resource
- [MDN]("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
- [Pexels](https://www.pexels.com/) – Licence free image repository
- [BeFunky](https://www.befunky.com/create/resize-image/) – Online image resizer
- [Color Picker](https://htmlcolorcodes.com/color-picker/) – HTML and CSS colour codes
- [JSHint](https://jshint.com/) - Javascript code analysis tool
- [Shutterstock: 10 Gorgeous Color Schemes for Websites](https://www.shutterstock.com/blog/10-gorgeous-color-schemes-for-websites?kw=&gclsrc=aw.ds&gclid=Cj0KCQjw2or8BRCNARIsAC_ppyaGHtDUv5oNSHP0th9gb8N6VBiGFAq-pYu1cFQFW5szceQETvoAnKgaAhwPEALw_wcB)
- [10 Trending 2020 Website Color Schemes](https://www.quicksprout.com/trending-website-color-schemes/)
- [Am I responsive?](http://ami.responsivedesign.is/) - provides a simple view of a websites responsiveness.

______

## **Credits** <a name="credits"></a>

### **Content**

All of the text in this website is entirely original and has largely been adapted from a copy of my CV.

### **Media**

The photos used in this site were obtained from:

- The portrait on the landing page is a 'selfie' taken by myself - clearly nobody else would want that in their album.
- Image of the Rig – Was one of several taken by me on a visit to West Texas in 2018
- The pixelated map used on the landing page was created from scratch __by myself__ using a pixel map generator in [amCharts](https://pixelmap.amcharts.com/)
- The drill bit image used on the 'Portfolio' page was copied from [Wikimedia](https://commons.wikimedia.org/w/index.php?search=Natural+Gas+Drill+Bit&title=Special:Search&profile=advanced&fulltext=1&advancedSearch-current=%7B%7D&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1#/media/File:USGS.Natural_Gas_Well_Drill_Bit.Fayeteville_Shale_28099191.jpg)
- The remaining images were downloaded from the following sites:
  - The image cointaining blurred code was copied from [Pexels](https://www.pexels.com/photo/office-working-app-computer-97077/)
  - The Laptop image used in the portfolio page was copied from [Pexels](https://www.pexels.com/photo/gray-laptop-computer-showing-html-codes-in-shallow-focus-photography-160107/)
  - Under Construction from [Pixabay](https://pixabay.com/illustrations/under-construction-construction-sign-2408062/)
  - The portfolio project images were screenshots taken after completion of the respective walkthrough projects.

### **Code Snippets**

- Bootstrap responsive navbar - [Bootstrap 4 - navbar](https://getbootstrap.com/docs/4.0/components/navbar/)
- While building the navbar toggler, the menu items would only appear on the left.
  - The solution was provided on [Stack Overflow](https://stackoverflow.com/questions/47518911/boostrap-4-navbar-collapse-menu-right-align/50881393) 
- My navbar had a small amount of whitespace on the right-hand side.
  - The solution to remove this was again found on [Stack Overflow](https://stackoverflow.com/questions/48510609/remove-white-space-from-the-sides-and-top-of-my-navbar/48510687) 
- **Progress bars**
The progress bars used in resume.html were taken from [Bootstrap 4 - Progress](https://getbootstrap.com/docs/4.0/components/progress/)
- **Accordion Feature**
I copied and subsequently adapted the accordion feature from the tutorial provided on this webpage [**font-awesome-accordion-arrow-css**](https://supfort.com/font-awesome-accordion-arrow-css)
  - The reason for not using the standard Bootstrap accordion was that I wanted to visually indicate there was additional content hidden within each role.
- The code to achieve better looking bullets was taken from [Fontawsome](https://fontawesome.com/how-to-use/on-the-web/styling/icons-in-a-list)
- The project cards were also adapted from [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/card/) code.

### **Acknowledgements** <a name="acknowledgements"></a>
-As a bit of a Google Map geek, I jumped at the opportunity to incorporate this into a project, while knowing little about how deep I would eventually get into the API, yet still scratching the surface. This is a very powerful tool, with some excellent documentation.

- Thanks again to my mentor Sinead O'Brien for her direct and honest feedback, support and helpful advice in the run up to, and during this project. With your help I aim to become a useful developer.

- I'd like to acknowledge the help and encouragement I received during this project from :-
  - Eamonn Smyth
  - Haley Schafer
  - Johann Alberts
  I was banging my head against the wall trying to achieve my desired Google Map marker functionality and all three contibuted in some way to helping me clear my head and eventually achieve my goal. Thanks again!

- Thanks to everyone at the Code Institute for the excellent video tutorials and fantastic introduction to Javascript and RESTful API's.

______
### **Technical Support** <a name="technical"></a>
If you encounter any issues with this website, or require any support please email the developer [johnge71@gmail.com](mailto:johnge71@gmail.com)