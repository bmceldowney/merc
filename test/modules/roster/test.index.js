var chai = require('chai');
var expect = chai.expect;

describe('roster', function () {
	var roster;

	beforeEach(function () {
		roster = require('../../../src/modules/roster');
	});

	it('should define roster management methods', function () {
		expect(roster).to.exist;
		expect(roster.add).to.be.a('function');
		expect(roster.remove).to.be.a('function');
		expect(roster.summarize).to.be.a('function');
		expect(roster.get).to.be.a('function');
	});
});
