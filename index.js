const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}

async function start() {
	const content = {
		maximumSentences: 7
	}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix(content.searchTerm)
	content.lang = askAndReturnLang()

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

	function askAndReturnLang() {
		const language = ['pt', 'en']
		const selectedLangIndex = readline.keyInSelect(language, 'Escolha o idioma de pesquisa: ')
		const selectedLangText = language[selectedLangIndex]

		return selectedLangText
	}

	console.log(JSON.stringify(content, null, 4))
}

start()