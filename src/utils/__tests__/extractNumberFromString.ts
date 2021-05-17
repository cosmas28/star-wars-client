import { extractNumberFromString } from '../extractNumberFromString';

describe('extractNumberFromString', () => {
	it('should return number from a string', () => {
		expect(extractNumberFromString('http://swapi.dev/api/planets/1/')).toEqual('1');
	});
});
