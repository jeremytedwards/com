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

# Update 13 - 
## User Stories: MVP

As a developer, I want my portfolio to run in a development environment that closely matches production, so that I can reduce bugs related to infrastructure surprises.

You'll need to create a new Heroku app, and link it to your portfolio

As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.

You'll need to get your app deployed and running on Heroku.

Heroku will need to know what kind of app you are running, and how to run it.

You can create a new package.json file, or copy over `package.json` and `server.js` from the blog project.

As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.

You'll need to configure an environment variable on your production server, so the server.js file can access your token when it's running.


## User Stories: Stretch Goals
 1. As a site owner, I want [www.my-own-domain-name.io] hooked up to my Heroku app, so that I don't have to explain to people how to spell "my-site-name.herokuapp.com" over the phone.
 - As a site owner, I want my root domain to redirect to the `www` subdomain, so people can type in either one to load my app.