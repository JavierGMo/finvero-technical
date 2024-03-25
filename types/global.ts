export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface Paginate {
  perPage: number;
  page: number;
}

export interface OptionMenuNavigation {
  title: string;
  href?: string;
  description?: string;
  subItems?: OptionMenuNavigation[];
}
