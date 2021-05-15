const generateRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({length}, (_, index) => start + index);
};

export const getPageRangeToDisplay = ({
  pageCount,
  currentPage,
  rangeToDisplay,
}: {
  pageCount: number;
  currentPage: number;
  rangeToDisplay: number;
}): (
  | number
  | undefined
)[] /* undefined values mark discontinuity in the range */ => {
  if (pageCount <= rangeToDisplay) return generateRange(1, pageCount);

  if (currentPage < rangeToDisplay)
    return [...generateRange(1, rangeToDisplay - 1), undefined, pageCount];

  if (currentPage + rangeToDisplay - 1 > pageCount)
    return [
      1,
      undefined,
      ...generateRange(pageCount - rangeToDisplay + 2, pageCount),
    ];

  const centerRangeLength = rangeToDisplay - 2;
  const padding = Math.floor(centerRangeLength / 2);

  /**
   * If the rangeToDisplay is pair we need a pair center range,
   * otherwise we will overflow the rangeToDisplay by 1
   */
  const pairRangeNormalizer = rangeToDisplay % 2 === 0 ? 1 : 0;

  return [
    1,
    undefined,
    ...generateRange(
      currentPage - padding,
      currentPage + padding - pairRangeNormalizer,
    ),
    undefined,
    pageCount,
  ];
};
