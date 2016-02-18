# Update 7 - Functional Programming
Scopes and closures and IIFE's, oh my!

Applied some functional programming concepts to the codebase.

Eliminated some for loops.
Used .map() where  transforming one collection into another.
Enclosed the contents of each script file in an IIFE, that exports any interface methods.
Used templates to avoid repetition of HTML structure. Use .map() to convert collections of data into collections of DOM nodes.

# Update 11 - Single-Page Apps

As a user updated this site to be a Single Page Application (SPA) by using the page.js library to capture clicks and 
execute a function to modify the page, rather than reloading content from a server.

Update your main nav so that each clickable item is a link to a different url, that is handled by a function as indicated 
by page.js.

Keep the code organized in a M-V-C structure that isolates data management from presentation layer, from the controller 
that holds it all together. 

# Update 12 - REST and API's

Created a controller that includes a call to the Github API. This call grabs data about my individual account, and renders 
portions of the returned content to the page, once the data has been loaded. 

# Update 13 - Production Deployment

As a developer, I want my portfolio to run in a development environment that closely matches production, so that I can 
reduce bugs related to infrastructure surprises.

Created a new Heroku app, and linked it to my portfolio

As a site owner, I wanted my site running on a robust hosting platform, so that I don't have to hire a sysadmin.

Created a new `package.json` and `server.js` file.

Deployed app on Heroku.

As a developer, I wanted my secret tokens accessed only through environment variables, so that I could keep them secure.

Created a Config Vars on Heroku to support this.
