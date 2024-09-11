# stranger_things_quotes.js
Web-API for [strangerthings-quotes.vercel.app](https://strangerthings-quotes.vercel.app/) a simple API to retrieve some quotes of Stranger Things! [Source](https://github.com/shadowoff09/strangerthings-quotes)

## Example
```JavaScript
async function main() {
	const { StrangerThingsQuotes } = require("./stranger_things_quotes.js.js")
	const strangerThingsQuotes = new StrangerThingsQuotes()
	const randomQuote = await strangerThingsQuotes.getQuote()
	console.log(randomQuote)
}

main()
```
