import axios from 'axios'

var userName = 'EdwardSchaefer';

function getRepos(userName) {
	var url = 'http://api.github.com/users/' + userName + '/repos';
	axios.get(url)
		.then(function(response) {
			for (var i = response.data.length - 1; i >= 0; i--) {
				console.log(response.data[i].id)
			}
		});
	};

//getRepos(userName);

var repoName = 'interval-cycles';

//Get the directories and files in the root folder of a repository
function getDirectories(repoName) {
	var url = 'http://api.github.com/repos/' + userName + '/' + repoName + '/contents/'
	axios.get(url)
		.then(function(response) {
			for (var i = response.data.length - 1; i >= 0; i--) {
				console.log(response.data[i].name)
			}
		});
}

//getDirectories(repoName);

var file = 'index.html'

//Get the raw contents of a file in a repo
function getRawContents(file) {
	var urlResponse = '';
	axios.get('http://raw.githubusercontent.com/' + userName + '/' + repoName + '/master/' + file)
		.then(function(response) {
			console.log(response.data)
		})
};

//getRawContents(file)