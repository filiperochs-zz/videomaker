const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}

async function start() {
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix(content.searchTerm)

	await robots.text(content)

	function askAndReturnSearchTerm() {
		return readline.question('Escreva um termo da Wikipedia: ')
	}

	function askAndReturnPrefix(searchTerm) {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, `Escolha uma opção para o termo ${searchTerm}: `)
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}

	console.log(content)
}

start()