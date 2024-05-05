import React from 'react'

interface PaginationProps {
    totalProducts: number;
    limit: any;
    setPage: (num: any) => void;
    page: any;
  }

const Pagination: React.FC<PaginationProps> = ({totalProducts, limit, page, setPage}) => {
    const totalPages = Math.ceil(totalProducts / limit);
    const startIndex = limit * (page - 1) + 1;
    const endIndex = Math.min(page * limit, totalProducts);
    const handleNext = () => {
        if(page >= totalPages) return;
        setPage(page + 1);
    }
    const handlePrev = () => {
        if(page <= 1) return;
        setPage(page - 1);
    }
  return (
   <>
        <div className="lg:flex  items-center justify-between">
        <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-deep-green">{startIndex}</span> to <span className="font-semibold text-deep-green">{endIndex}</span> of <span className="font-semibold text-deep-green">{totalProducts}</span> Entries
        </span>
        <div className="inline-flex gap-2 mt-2 xs:mt-0">
            <button onClick={handlePrev} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-green rounded-s hover:opacity-6 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
            </button>
            <button onClick={handleNext} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-green border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
            </button>
        </div>
        </div>

   </>
  )
}

export default Pagination