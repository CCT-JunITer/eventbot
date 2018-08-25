const config = require('../../assets/config/config.json')

class Meetup {
	constructor() {
		this.client = require('../lib/meetup')({
			key: config.meetup
		})
	}

	getProposals(topics) {
		return meetup.getStreamOpenEvents(
			{
				text: topics.join(' AND '),
				city: 'Berlin, Germany',
				trending: 'desc=true'
			}, 
			function(err, res) {
				return res
			}
		)
	}
}

module.exports = Meetup