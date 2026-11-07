export interface Pagination {
  total: number;
  currentPage: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedData<T> {
  items: T[];
  pagination: Pagination;
}
