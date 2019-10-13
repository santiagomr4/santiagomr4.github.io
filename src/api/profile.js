import config from './config.js'

const nickname = config.nickname
const apiURL = `https://api.github.com/users/${nickname}`

export default function getProfile() {
	return fetch(apiURL)
		.then(res => res.json())
}