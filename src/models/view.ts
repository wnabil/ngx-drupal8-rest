export interface ViewOptions {
  // contextual filters
  args?: string[] | number[] | boolean [];
  // exposed filters
  filters?: { [key: string]: string | number | boolean };
  // pagination for full or mini pagers
  pagination?: {
    page?: number;
    items_per_page?: number;
    offset?: number;
  };
  // sorting
  sorting?: {
    sort_by: string;
    sort_order: 'ASC' | 'DESC'
  };
}
