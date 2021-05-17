import { validDate, formatDate } from '../date';

describe('Date helpers', () => {
	it('should return true if given valid date', () => {
		expect(validDate('2014-12-20T21:17:56.891000Z')).toBeTruthy();
	});

	it('should return formated date', () => (
		expect(formatDate('2014-12-09T13:50:51.644000Z')).toEqual('Dec 9, 2014 4:50 PM')
	));
});
