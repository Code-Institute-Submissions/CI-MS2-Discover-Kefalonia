# [**Discover Kefalonia**](https://gazzaj.github.io/CI-MS2-Discover-Kefalonia/)

Kefalonia is the largest of the Greek Ionian islands, and is a popular holiday destination for many Europeans. Despite this it remains unspoilled and far less crowded than it's neighbours Zakynthos and Corfu, and is thus a great options for a summer vacation.
The aim of this website is to showcase the the island of Kefalonia to people looking for inspiration for their next summer holiday destination; providing useful information about the island like Climate, towns/resorts, beaches and some of the non-beach related activities possible. 
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

My aim is to provide a much simpler yet hopefully intuitive user experience, while combining information, imagery into a single interactive section focussed around a Google Map of the island. Each page fills the viewport on most devices, while obviously splitting the main map screen on mobile devices is unavoidable. I had elected to 
- Interactive navigation links
- Interactive social links section
- Information controls which provide feedback to the user

### **User Stories** <a name="stories"></a>

1. **_As a_** developer, **_I need to_** provide a simple and intuitive UX, **_in order to_** allow users to easily interact with the site.

2. **_As a_** developer, **_I need to_** use attractive imagery and reliable information, **_in order to_** entice the user to  discover more about the island and spend more time interacting with the site.

3. **_As a_** developer, **_I need to_** provide a form , **_in order to_** enable the users to contact the site owner to enable more detailled interactions to occur.

3. **_As a_** first time visitor, **_I need to_** see enticing imagery, **_in order to_** consider learning more about this destination.

4. **_As a_** first time visitor, **_I need to_** easily and quickly discover information about the island,  **_in order to_** consider Kefalonia as a potential holiday location.

5. **_As a_** user, **_I need to_** compare the destinations (towns/resorts), **_in order to_** establish where might be suitable for me/my family to stay

6. **_As a_** user, **_I need to_** establish some of the other activities possible on the island, **_in order to_** understand whether there is enough diversity to entartain my whole family.

7. **_As a _** user, **_I need to_** have a means to contact the developer/site owner, **_in order to_** discover more detailled information which may not be covered on the site.

### **The 5 Planes of UX** <a name="planes"></a>
The five planes provide a framework for discussing user experience.

#### **Strategy**  
Kefalonia is the largets of the Ionian islands and 6th largest Greek island, yet remains less well known as a holiday destination compared to islands like Crete, Corfo, Mykonos, Santorini. The positive side is that the island is not crowded and over developed. The down side is that unless people get a recommendation they won't get to discover the beatutiful beaches, friendly people and diverse landsacpes which make Kefalonia such a holiday paradise.

The intention is to provide some basic general information about Kefalonia to hopefully encourage them to learn more and eventually enjoy the island for themselves, such as:
 - Discover more about the island of Kefalonia
 - Understand the best time of year to visit 
 - Compare the towns/resorts
 - Discover some of the best beaches
 - Learn about some of the activities possible on the island

#### **Scope**  
The primary requirements for this are to provide:
 - Interactive elements which enable the user to initiate and control actions

As I have chosen a fairly simple structure for the site it will have:
 - Stripped down navigation.
 - One main page section with interactive elements
 - A contact form
 - Interactive social media links to access relevant content

Thus I aim to use the incorporate a google map with custom markers and additinal c
 - Google Map with Custom Markers for
   - Beach Locations
   - Popular towns/resorts
   - Activities
 - Enable the user to interact with the markers, to reveal additional information
 - Use attractive images to please the users
 - Select typography and colurs which envoce the desired response
 

The functionality will be provided by the Google Maps Javascript API
I plan to incorporate basic climate data through the use of a RESTful API
The aim of this firt version is to be a minimal viable product, which could be expanded and further improved in the future as my knowledge and experience improves.

providing some basic information to enable the users to discover more information, with the hope of whetting their appetite to learn more and potentially book a vacation. 
A key deliverable is achieving this while incorporating interactive elements I want to challenge myself to produce something I am proud to put my name on, without overextending myself and causing scope creep. I am conscious that I needed to keep the content within the scope of my current knowledge; this is critical for managing issues during the build and the potential need to troubleshoot on the fly.

>**_I had originally planned a fairly standard multi-section/page site with interactive elements; but have elected to try to combine and incorporate all of that content one might expect in "About" and "Gallery" pages into the interactive elements of the main "Map" page._**

#### **Structure**  
I aim to build on user knowledge by providing intuitive UX with a common navbar and footer section throughout the website.  
 - In the end, there was a deliberate change to the 'CONTACT'; section of the contact.html page. Given that this page will have all the necessary contact information on it I decided to change the footer section to an 'ABOUT ME' box, where the user is reminded of some of the candidates key skills (as opposed to repeating the contact information).

I liked the idea of splitting the information into two sections with 1/3 and 2/3 widths respectively as we had done in the UCD Resume Walkthrough project. I intend to recreate this basic structure without copying the code from that exercise.
I will use the left hand 1/3 to list the shorter strings of data which could be bulleted or short paragraphs and reserve the remaining 2/3 portion of the page for the bulk of the information like work history. 
 - I believe I have achieved this without directly copying the code. 

#### **Skeleton** 
The website will comprise three main pages: 
- Landing | Explore | Contact
>**_This has been reduced from a more conventional multisection/page site._**

There will be clear navigation links to navigate between pages.
>**_I elected to NOT use any of the standard Bootstrap navbar templates due to the limited number of pages. I also wanted to provide more interactive navigation elements_**

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
The websites pages were almost built in reverse order from 'Contact', 'Resume' through 'Portfolio' and finally the home page. This was a deliberate choice based on how confident I was in the structure of each page. I had well defined design ideas for the first two pages but struggled to nail down a structure for the homepage.
That said I am pleased with the overall result

##### **Colour Scheme**
I had intended to use a darker colour scheme for this website. However as the build progressed it just didn't seem to suit; nor did it match the images I had selected. Of all aspects of this build I will freely admit this was the area I struggled with the most. After some trial and error I sought inspiration from two websites:
- [10 Gorgeous Color Schemes for Websites](https://www.shutterstock.com/blog/10-gorgeous-color-schemes-for-websites?kw=&gclsrc=aw.ds&gclid=Cj0KCQjw2or8BRCNARIsAC_ppyaGHtDUv5oNSHP0th9gb8N6VBiGFAq-pYu1cFQFW5szceQETvoAnKgaAhwPEALw_wcB)
- [10 Trending 2020Website Color Schemes](https://www.quicksprout.com/trending-website-color-schemes/)

I decided on the "Scholar" colour scheme as it fitted the theme of the website and made some use of a darker blue, which had been my original intention. I added the teal colour to provide another slightly brighter colour for contrast.
- On reflection I am pleased with the result; it isn't too playful or childish, yet isn't cold and boring. The colours provide a decent amount of contrast.

I wanted the look and functionality of the hyperlinks to be intuitive so read a little about achieving the right aesthetics
- [WebFX - Designing and styling hyperlinks](https://www.webfx.com/blog/web-design/designing-hyperlinks-tips-and-best-practices/)

##### **Typography**  
The only issue with typography is narrowing my choice down to one or two fonts.
- I selected **_Michroma_** because it has a squarer profile, which appeals to me, is easy to read and looks professional.
- I complemented Michroma with the **_Cairo_** font after comparing various combinations on the Google Fonts page. The selection was primarily made on the basis of aesthetics and ease of reading. Maybe it's my age but some font's were just a bit cramped and thus difficult to read, if that makes sense?

##### **Imagery** 
Given the intended purpose of this site is to convey my skills, experience and work history I have limited the use of images, preferring to focus on these other aspects. However, I want the few images I use to convey my journey from working on oil rigs and now into coding websites; I have thus attempted to pick appropriate images.
  
The only section where I break this rule is the 'Portfolio' page. I want to use images of the projects in an attempt to generate interest and hopefully lead to user interaction.

I have reused the image of the rig for the contact page as it represents teamwork and links well with the heading "_How can we work together?"

______

## **Features** <a name="features"></a>
What follows is a list of the main features incorporated into the website, and a short list of upgrades which could be applied once my knowledge of other technologies like JavaScript has increased.

### **Existing Features**
- This is a static website comprising four distinct pages, linked by the use of a navbar.
- Navbar – I have selected a bootstrap responsive navbar to achieve plug and play functionality. 
  - Despite having a logo I have chosen to retain the 'Home' link to reduce confusion (in case users don't intuitively know to click the logo to return to the Home page).
  - On smaller screen sizes the navbar collapses into a "burger" icon which is subsequently used to display/hide the menu items.
  - I elected to fix the navbar at the top of the screen to ensure the user could always achieve quick and easy navigation to any other page.
- An Experience page with links to individual company websites, which enables the user to discover more about some of the companies I have worked for.
  - Progress bars and Bullet point quickly convey important skills. 
  - An 'accordion' dominates the Work History section enabling the user to selectively expand each job role as they see fit to find out a little more about each role. This is critical to limiting the visible text and the height of the page for mobile users.
- A Portfolio page with Project 'Cards" linking to individual projects. Links have been disabled where appropriate. Placeholder cards are used to illustrate what the page could look like as the number of projects increases. The cards have an image and brief explanation of the project.
- A Contact page with a functioning google map iframe and a contact form (currently linked to the CI form dump)
- A footer section with Social Media and email links; as well as a link to a PDF of my CV.

### **Features Left to Implement**

- I would eventually like to complete the Contact form so it is capable of sending the user submitted data to me via email - I am currently lacking the JavaScript skills to enable this feature.
- Depending on the number of projects which I reference on this site I may need to consider a different layout for the Portfolio Page.
- I also intend to replace my image on the landing page with a more professional image in the near future.

______

## **Technologies Used** <a name="technologies"></a>  

This static website has been built using the following core technologies:

Core coding languages

- ![HTML 5](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/html-5-logo.png "HTML5") - HTML5
- ![CSS3](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/css3-logo.png "CSS3") - CSS3
- Javascript

Integrations

- ![Bootstrap 4](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/bootstrap-logo.png "Bootstrap 4") - Bootstrap 4
- ![Font Awesome](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/fontawesome-logo.png "Font Awesome") - Font Awesome was the source of all icons.
- ![Google Fonts](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/googlefonts-logo.png "Google Fonts") - Fonts used on the website courtesy of Google Fonts
- JQuery - The project uses JQuery to simplify DOM manipulation.
- Hover.css for button hover effects
- 
- JQuery
- RapidAPI
- Chart.js

Version Control, storage and hosting

- ![Gitpod](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/gitpod-logo.png "Gitpod logo") - All of the website's code was written in the Gitpod IDE.
- ![Git](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/git-logo.png "git logo") - used for maintaining version control of the saved files.
- ![GitHub](https://github.com/GazzaJ/GarethJohn-Resume-and-Portfolio/blob/master/readme-images/github-logo.png "Github logo") - used as the primary repository for storying the files and documentation.

Other

- Dillinger was used to edit the markdown required for the README file.
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

- Initially the collapsed Menu items would not appear and disappear when clicking the 'burger'.
  - The solution to this was found in the [Slack community](https://code-institute-room.slack.com/archives/C7J2ZAVHB/p1592942356085000?thread_ts=1592936056.080800&cid=C7J2ZAVHB); and was simply a case of relocating one of the bootstrap JS CDN links to the 'head'


- While building the navbar toggler, the menu items would only appear on the left.
  - The solution was provided on [Stack Overflow](https://stackoverflow.com/questions/47518911/boostrap-4-navbar-collapse-menu-right-align/50881393)


- My navbar had a small amount of whitespace on the right-hand side.
  - The solution to remove this was again found on [Stack Overflow](https://stackoverflow.com/questions/48510609/remove-white-space-from-the-sides-and-top-of-my-navbar/48510687)


- When I initially created cards for my portfolio projects each one was sized dependent on the content, which was undesirable. I found a solution to ensure all cards were equal height here: [Codeply](https://www.codeply.com/go/jbcgzs2Nzq)  

- I used the code listed on this site to push the card button down to the bottom of the card. [Stack Overflow](https://stackoverflow.com/questions/48406628/bootstrap-align-button-to-the-bottom-of-card)

- Throughout the build I had an issue with there being whitespace down the right-hand side of my pages. The issue wasn't immediately obvious, until I created boxes around every element; which highlighted some divs were wider than the remainder of the page.
 This was a useful method to visualise the interaction of all page elements. [Stack Overflow](https://stackoverflow.com/questions/46630191/white-space-on-right-side-of-page/46630298)

- I initially struggled to achieve fully responsive and fixed height images for my portfolio cards. In fact I'm not sure this is possible to achieve without changing aspect ratios so I resorted to the "img-fluid" class from [Bootstrap - images](https://getbootstrap.com/docs/4.0/content/images/). 

- I had highlighted in the features section that the form on the 'Contact' page is not yet connected, and is incapable of sending me any of the user inputs. This is because I currently lack the skills and knowledge required to achieve connectivity. This will be covered in future modules and will have to wait until the end of the course to be implemented.
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

I have attempted to work independently as much as possible while building this website, choosing to solve my own issues, using web resources wherever possible. Thus, my main resource throughout this project was the trusty Google search.
 Aside from Google I have made use of the following resources: -

- [Balsamiq](https://balsamiq.com/wireframes/) – Wireframing Tool
- [Free Logo Maker](https://logomakr.com/) - Simple drawing tool used to create a brand logo
- Code Institute course material and Walkthrough projects
- Google DevTools - for trouble shooting and first pass testing
- [StackOverFlow](https://stackoverflow.com/) – Web based coding 
- [CSS Tricks](https://css-tricks.com/) – Styling tips like https://css-tricks.com/styling-underlines-web/
- [W3Schools](https://www.w3schools.com/) – General coding resource
- [Pexels](https://www.pexels.com/) – Licence free image repository
- [TinyPNG](https://tinypng.com/) – Application for compressing image files
- [Color Picker](https://htmlcolorcodes.com/color-picker/) – HTML and CSS colour codes
- [amCharts](https://pixelmap.amcharts.com/) - Pixelated map generator tool
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

- The idea for this project originally came from a basic Resume exercise to illustrate ordered and unorder I had worked on while using the Mimo app&#39; (https://getmimo.com/playgrounds/812454) prior to starting the Full Stack Software Development course at the Code Institute. I subsequently expanded the basic exercise to create an online resume.

- I'd like to thank my mentor Sinead O'Brien for her direct and honest feedback, support and helpful advice in the run up to, and during this project. Thanks also for recommending Dillinger as a markdown editor.

- Further inspiration came from the UCD-Resume project in the CI User Centric Frontend module. I particularly identified with the thirds concept for separating the content.

- I'd like to acknowledge the guidance we received in an MS-1 planning call with :-
  - Jim Morel
  - John Traas
  - Anthony O'Brien
  ... the information they presented was regarding preparation for MS-1 projects was invaluable and helped calm the nerves somewhat before heading into the milestone project.
- Thanks to everyone at the Code Institute for helping to make this such an enjoyable and rewarding experience.
- I would also like to thank Luke Walters-Leatherbarrow at Learning People who provided moral support through the initial few week of my transition into the Coding world.
______
### **Technical Support** <a name="technical"></a>
If you encounter any issues with this website, or require any support please email the developer [johnge71@gmail.com](mailto:johnge71@gmail.com)