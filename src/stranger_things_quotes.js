class StrangerThingsQuotes {
	constructor() {
		this.api = "https://strangerthings-quotes.vercel.app/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getQuote() {
		const response = await fetch(
			`${this.api}/quotes`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getQuotes(number) {
		const response = await fetch(
			`${this.api}/quotes/${number}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {StrangerThingsQuotes}
