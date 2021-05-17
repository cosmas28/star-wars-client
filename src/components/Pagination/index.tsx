import * as React from 'react';

import { ICONS } from '../Icons';

import { getPageRangeToDisplay } from '../../utils/getPageRangeToDisplay';
import { Container, PageSelector, PreviousPage, NextPage, PageBreak, PagesWrapper } from './styles';

type Props = {
  pageCount: number;
  currentPage: number;
  rangeToDisplay?: number;
  onPageChange: (nextPage: number) => void;
};

const DEFAULT_RANGE_TO_DISPLAY = 3;

export const Pagination: React.FunctionComponent<Props> = ({
  pageCount,
  currentPage,
  onPageChange,
  rangeToDisplay = DEFAULT_RANGE_TO_DISPLAY,
}) => {
  const firstPage = currentPage === 1;
  const lastPage = currentPage === pageCount;
  const getChangePageHandler = (page: number) => () => onPageChange(page);

  const handlePreviousPage = () => {
    if (!firstPage) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (!lastPage) onPageChange(currentPage + 1);
  };

  const [pages, setPages] = React.useState<(number | undefined)[]>([]);

  React.useEffect(() => {
    const paginationPages = getPageRangeToDisplay({
      pageCount,
      rangeToDisplay,
      currentPage,
    });

    setPages(paginationPages);
  }, [pageCount, setPages, currentPage, rangeToDisplay]);

  return (
    <Container>
      <PagesWrapper>
        <PreviousPage data-testid="prev-button" disabled={firstPage} onClick={handlePreviousPage}>
          {ICONS.chevronLeft}
        </PreviousPage>
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            {!page ? (
              <PageBreak data-testid="page-break">{ICONS.ellipsis}</PageBreak>
            ) : (
              <PageSelector selected={page === currentPage} onClick={getChangePageHandler(page)}>
                {page}
              </PageSelector>
            )}
          </React.Fragment>
        ))}
        <NextPage data-testid="next-button" disabled={lastPage} onClick={handleNextPage}>
          {ICONS.chevronRight}
        </NextPage>
      </PagesWrapper>
    </Container>
  );
};
