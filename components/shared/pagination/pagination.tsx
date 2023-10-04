'use client';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import './pagination.scss';
import { useState } from 'react';

export interface IPagination {
  currentPageNumber: number;
  totalPages?: number;
  onPageChange: (newPageNumber: number) => void;
}
const Pagination: React.FC<IPagination> = (props) => {
  const [customPage, setCustomPage] = useState<number>();
  const { currentPageNumber = 1, onPageChange, totalPages = 0 } = props;

  const startPageNumber = Math.max(1, currentPageNumber - 2);
  const endPageNumber = Math.min(totalPages, currentPageNumber + 2);

  return totalPages > 0 ? (
    <div className="pagination">
      <div className="btn-group">
        <Button
          disabled={currentPageNumber === 1}
          onClick={() => onPageChange(currentPageNumber - 1)}
        >
          <ChevronLeftIcon />
          <span>PREV</span>
        </Button>
        <Button
          disabled={currentPageNumber === totalPages}
          onClick={() => onPageChange(currentPageNumber + 1)}
        >
          <ChevronRightIcon />
          <span>NEXT</span>
        </Button>
      </div>
      {totalPages > 1 && (
        <>
          <div className="digits">
            {Array(totalPages)
              .fill('*')
              .map((pIndex, i) => (
                <span
                  className={cn(
                    'font-sans text-[17px]',
                    i + 1 >= startPageNumber && i + 1 <= endPageNumber
                      ? ''
                      : 'hidden',
                    currentPageNumber === i + 1 &&
                      'rounded-[var(--b-radius)] bg-[var(--color-orange-400)] px-2 text-white',
                  )}
                  key={i}
                  onClick={() => onPageChange(i + 1)}
                >
                  {i + 1}
                </span>
              ))}

            {totalPages >= 3 && endPageNumber < totalPages && (
              <>
                <span
                  className={cn(
                    'font-sans text-[17px]',
                    totalPages >= 3 && endPageNumber < totalPages,
                    'hover:cursor-pointer',
                  )}
                  onClick={() => onPageChange(totalPages)}
                >
                  {`... `}
                  {totalPages}
                </span>
              </>
            )}
          </div>
        </>
      )}
      <div className="custom-page">
        <input
          max={totalPages}
          value={customPage || 0}
          onChange={(e) =>
            setCustomPage(() => {
              const num = Number(e.target.value);
              return num >= totalPages ? totalPages : num;
            })
          }
          type="tel"
        />
        <Button
          disabled={!customPage}
          onClick={() =>
            customPage && onPageChange(customPage <= 0 ? 1 : customPage)
          }
        >
          GO
        </Button>
      </div>
    </div>
  ) : null;
};
export default Pagination;
