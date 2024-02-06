export const generateValue = (length = 4) => {
	const data = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_{}[]:<>?/'
	let id = ''

	for (let index = 0; index < length; index++) {
		id += data[Math.floor(Math.random() * data.length)]
	}

	return id
}