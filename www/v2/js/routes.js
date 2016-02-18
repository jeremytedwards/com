// Routing

page('/', indexController.index);
page('/portfolio', portfolioController.index);
page('/about', aboutController.index);
page('/github', githubController.index);

// Run your routing
page();
