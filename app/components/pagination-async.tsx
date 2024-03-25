import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationAsyncProps {
  hasNext: boolean;
  page: number;
  refetch: (page: number) => Promise<void>;
}

export const PaginationAsync = ({
  hasNext,
  page,
  refetch,
}: PaginationAsyncProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={page !== 0 ? "#" : undefined}
            onClick={() => {
              refetch(page - 1).catch((err) => {
                console.error(err);
              });
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={hasNext ? "#" : undefined}
            onClick={() => {
              refetch(page + 1).catch((err) => {
                console.error(err);
              });
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
