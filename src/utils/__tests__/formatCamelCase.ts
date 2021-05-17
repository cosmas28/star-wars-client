import { formatCamelCase } from '../formatCamelCase';

describe('formatCamelCase', () => {
	it('should return separated words', () => {
		expect(formatCamelCase('birthYear')).toEqual('Birth year');
	});
});
