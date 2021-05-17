import { getPageRangeToDisplay } from '../getPageRangeToDisplay';

describe('getPageRangeToDisplay', () => {
	it('should return a range of pages with page break at the end', () => {
		expect(getPageRangeToDisplay({
			pageCount: 84,
			currentPage: 1,
			rangeToDisplay: 3,
		})).toEqual([ 1, 2, undefined, 84 ]);
	});

	it('should display all pages', () => {
		expect(getPageRangeToDisplay({
			pageCount: 10,
			currentPage: 1,
			rangeToDisplay: 10,
		})).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
	});

	it('should return a range of pages with page break at the beginning', () => {
		expect(getPageRangeToDisplay({
			pageCount: 10,
			currentPage: 8,
			rangeToDisplay: 4,
		})).toEqual([ 1, undefined, 8, 9, 10 ]);
	});

	it('should return two page breaks', () => {
		expect(getPageRangeToDisplay({
			pageCount: 84,
			currentPage: 44,
			rangeToDisplay: 3,
		})).toEqual([ 1, undefined, 44, undefined, 84 ]);
	});
});
