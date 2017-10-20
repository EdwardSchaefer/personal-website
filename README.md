This repository is for a personal website which display a user's repositories and links to related pages. It uses ReactJS in combination with the Github API and Axios to display the contents of the user's repositories. The repositories can be filtered based on keywords which include languages, frameworks, concepts etc..

#List of Files
--------------

	*/public/: Publically available files, including index.html
	*/src/: Source code
	*/src/ajax.js: Functions for Github API
	*README.md: This readme file

#List of Changes
----------------

	10/4/2017: Initial Commit
	10/5/2017: Initialized a ReactJS template with create-react-app
	10/5/2017: Edited README.md, package.json
	10/5/2017: Edited index.html to include header with links
	10/5/2017: Added ajax.js for axios ajax requests
	10/6/2017: Added getRepos function for retrieving repositories for a 
		user in ajax.js
	10/6/2017: Refactored url construction and added userName as an argument 
		into getRepos function in ajax.js
	10/6/2017: Added getDirectories function for retrieving directories and 
		files in the root folder of a repository
	10/6/2017: Added getRawContents function to ajax.js to get the raw 
		contents of a specific file
	10/6/2017: Added User component to App.js
	10/8/2017: Moved importing ajax.js library from index.js to App.js
	10/8/2017: Added export statement to ajax.js
	10/12/2017: Edited README.md to remove automatically added information 
		about merge
	10/12/2017: Initialized static version of website
	10/12/2017: Added template and css for list of projects
	10/13/2017: Added link to Movie Trailer site and hosted on virtual server
	10/13/2017: Added name header and links to LinkedIn/Github
	10/13/2017: Added links to individual Github repositories
	10/14/2017: Added link to Portfolio site and hosted on virtual server
	10/14/2017: Added link to Interval Cycles and hosted on virtual server
	10/15/2017: Added link to Neighborhood Map and hosted on virtual server
	10/16/2017: Added link to Multi-User Blog and configured Google App Engine 
		to serve the App on a custom domain
	10/19/2017: Configured Google App Engine to serve Blog on default domain
	10/19/2017: Added direct link to Swiss Tournament GitHub repository
	10/10/2017: Added link to Item Catalog