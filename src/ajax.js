import axios from 'axios'

var userName = 'EdwardSchaefer';
var url = 'http://api.github.com/users/' + userName + '/repos';

function getRepos() {
	axios.get(url)
		.then(function(response) {
			for (var i = response.data.length - 1; i >= 0; i--) {
				console.log(response.data[i].name)
			}
		});
	};

getRepos();