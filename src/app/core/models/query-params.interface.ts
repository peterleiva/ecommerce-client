/**
 * Used by resource for filtering, pagination, inclusion, select fields
 * and a lot more
 */

export interface PageParams {
  number?: number;
  size?: number;
}

export interface FilterParams {
  [search: string]: string
}

export interface QueryParams {
  include?: string;
  page?: PageParams;
  filter?: FilterParams;
}
