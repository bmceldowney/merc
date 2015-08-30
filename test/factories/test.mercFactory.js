var chai = require('chai');
var expect = chai.expect;

describe('merc factory', function () {
	var factory;

	beforeEach(function () {
		factory = require('../../src/factories/mercFactory');
	});

	describe('getMerc', function () {
		it('should return a merc instance', function () {
			var merc = factory.getMerc();
			expect(merc).to.exist;
			expect(merc.name).to.be.a('string');
		});

		it('should take a config object an apply it to the merc', function () {
			var config = {
				name: 'Susan',
				strength: 10
			};

			var merc = factory.getMerc(config);
			expect(merc).to.exist;
			expect(merc.name).to.be.equal('Susan');
			expect(merc.strength).to.be.equal(10);
		});
	});
});
