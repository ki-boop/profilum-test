export interface RequestParams {
  search?: string;
  page?: number;
}

export type LazyLoadingSwitcher = 'pagination' | 'scroll';

export interface IPaginationResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export function ObjectFields<T extends Object>(ob: T) {
  return Object.keys(ob);
}
