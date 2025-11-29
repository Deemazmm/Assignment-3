# 📑 Technical Documentation  

## HTML Code  
The website is divided into:  
1. **Header** → Includes website name (*My Portfolio*) and navigation bar.  
2. **Intro Section** → Shows a greeting depending on the time of day and a short description.  
3. **About Me Section** → Profile picture with brief information about me.  
4. **Projects Section** → Shows multiple projects (Logichem, Connect, ClubZone, and Wasl).
Each project has a title, image, and hidden description that expands when title is clicked.
Includes a filter dropdown (Beginner / Advanced / All).
5. **Contact Section** → Contains a form with fields for name, email, and message. The form is validated on the using JavaScript and shows feedback messages. 
6. **API Section (Quotes)**
Fetches a random quote from an external API and displays the quote and author.
Shows a message if the API request fails.
---

## 🎨 CSS Code  
1. **Intro Section** → Fullscreen background with an image and a centered white box for text.  
2. **Layout** → Flexbox is used for the navigation bar, projects section, and about section.  


3. **Project Section** → Each .project card has hover effects, shadows, and transitions for smoother interactivity.

→ Hidden project details (.project-details) appear when the .active class is toggled.

4. **Smooth Scrolling** → Enables smooth navigation when clicking on navbar links.


---

## ⚡ JavaScript Overview  
1. Adds a **greeting feature** that changes depending on the time of the day:  
   - Morning → “Good Morning”  
   - Afternoon → “Good Afternoon”  
   - Evening → “Good Evening”  


2. **Project Details Expansion**
Adds interactivity to project titles — clicking a title expands/closes details:

3. **Contact Form Validation**
Checks if all fields are filled before submitting:

4. **State Management**
Stores the visitor’s name using localStorage so it appears on every visit with the greeting

5. **Filtering Logic (Beginner / Advanced)**
Detects the selected level from the dropdown and shows only projects matching that level.
"All" resets the filter to show all projects.

6. **API Integration (Random Quotes)**

Fetches a quote from dummyjson.com/quotes/random and Displays
- Quote text
- Quote author
& Handles errors with a message.
