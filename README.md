# Week One:


This week, I created a leaflet map based on last week's assignment. I made a map from scratch, and the whole process was much easier than the first time, because this time I had a much better understanding of what I was doing. That gave me hope, because the first time I did it, it was an incredibly lengthy and tedious process. This time, it was equally as tedious but less lengthy. I created a "world map," one that does in fact, show the whole world, and put pins in famous cities. My goal was to put 10-15 all over the world and I ended up doing 12. Getting the information for each pin was interesting and fun, as I have been to almost every place on my map, I chose places that I like and that I think are worth visiting. Then, like last week, I looked up on Google Maps the coordinates to the locations of the places and put them in the coordinates area. Thus, I had my map.


## Next Week and Beyond:
I also made buttons for the questions. Although they're not finished, they're all there, and they are clickable. I'll add the function for JS next week, as well as CSS for the map, make it responsive and beautiful with CSS and (hopefully!) add some audio clips when people choose the right answer to my quiz questions. The biggest challenge, as usual, was just being extra meticulous with all the extra moving parts - another json file, so many coordinates and cities, and all the information I had to copy and paste from my original document.


*You can see my original document for the pins' information in "cities.md" on GitHub.*

# Week Two:


This week, I continued my work with the map and images. I collected all 12 images (9/12 of places I've been to and images that are mine), and put them in my images folder. I also had to restructure my folder sequence because of the way GitHub creates a separate folder in my final_project folder, and that isn't what's standard practice. So once that was fixed, I worked on the buttons. I used a neat tool to help me design it, https://www.bestcssbuttongenerator.com/, and adapted one of the buttons I wanted to use based off of this. I put the parts in my HTML and CSS files.


I input the answers for the questions and made them radio buttons. Then, I tried to write a function that would make them drop when clicked. It was very difficult and time consuming to figure out this step. After trying about 50 different things, between Google and other projects, I figured out the this, children and class connection. Now, when the buttons are clicked, the answers drop down. It's not pretty (yet), and nothing happens when you click an answer, but that's for next week.

## Week Three:


I will have a box pop up when an answer is clicked, and either celebrate or say "try again" in the language of the country based on the answer that's clicked. I will add CSS and make it responsive, and finish adding the jQuery and Javascript to make it beautiful, with fonts and colors and other visually appealing things. If I can make it happen, I'll make the background image of the box that pops up the pictures from each country that I've added to my images folder.

*Note, I know the HTML doesn't quite validate because of some of the mistakes in the buttons, but they do work. I'm not sure if this is actually a real issue or not, but I don't know how else to test that.*


# Week Three:

This week was a big week all around. I added a descriptive paragraph to introduce my project, and a byline. I did all my CSS to beautify my project: I added a background color, Google fonts, and changed all of the text in the pins, the questions and answers to fit the new font style.

Then, building from last week's blue buttons to drop down with the radio buttons (the answers), I created a "check answer" button. With that, I made it a modal. I made the function open into the modal box when clicked so that the photos I uploaded last week would show, one for each respective country. Then, I created a bit of text in each language (using Google Translate), and wrote "Congratulations" and "Try Again" in each language that relates to the country. So then, when the person selects the answer, one of two modals would come up. At first, I had two different heading styles in the same button, h2 for a correct answer, and h4 for an incorrect answer. When I tried (and ultimately failed), I tried instead to create two of the same modal, and then call and "if-else" function to launch the "congrats" modal when the correct answer is chosen and to launch the "try again" modal when any other answer is chosen.

Then, I tried using the JS Fiddle to make a function that would open one modal at a time, and after once again failing at that several (hundred) times, I looked elsewhere. I finally figured out how to make them open using the children, similar to my first button set, and finally got the modals to open and close on the correct answer and show the correct phrase. I then had to redo all the information for all the buttons, with a new value, which was now "right" or "wrong" instead of which actual answer was clicked.

Finally, I finished up all the CSS and colors, again, making last-minute changes. I tried to make the modals responsive, using the media query, and almost got it to work. The map, the buttons and all the rest of the items are responsive, but at small screen sizes, the photos are too large.

# Final Project:

Overall, I learned so much about coding and web design in this class. For the final project, I wanted to do something I was passionate about, traveling, and combine it with things we'd previously done, while also pushing myself to learn something new. I decided to make a quiz, which was my favorite assignment all year, and make a new leaflet map about several different places I'd been. Then, I combined that with some information, put it into a quiz format, and thus was born my idea. I wanted modals to pop with pictures - a concept I didn't even know was possible, or existed, and used most of my own images. I also wanted to include an aspect of the language of each country, so I made the "congrats" and "try again" responses to be in the language of the country that related to the question. By far, getting the JS to work with the modal was the hardest part. I watched tutorials, looked on codepen, stackoverflow and asked many questions. It wasn't until the fourth or fifth redoing of the entire modal section that I realized a solution to my problem and was able to solve the situation. Making the modals responsive was also nearly impossible and I struggled with that through these last few days. I was able to fix the issue of the overflow, with the z-index idea I learned, and fixed the CSS.

Another thing to note was the way I made my buttons doesn't actually validate, but it was a website given to me by Professor McAdams, which I knew had to be correct. So, I used them anyway, and hope that they work.

This was an incredible learning experience. I felt challenged, and pushed, throughout these three weeks and want to continue to learn to code. 
