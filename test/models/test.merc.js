var chai = require('chai');
var expect = chai.expect;

describe('merc model', function () {
	var merc;

	beforeEach(function () {
		merc = require('../../src/models/merc');
	});

	it('should have the correct properties', function () {
		expect(merc).to.exist;
		expect(merc.name).to.be.a('string');
		expect(merc.strength).to.be.a('number');
		expect(merc.speed).to.be.a('number');
		expect(merc.wit).to.be.a('number');
		expect(merc.charm).to.be.a('number');
		expect(merc.maximumHealth).to.be.a('number');
		expect(merc.health).to.be.a('number');
		expect(merc.traits).to.be.a('array');
	});
});
