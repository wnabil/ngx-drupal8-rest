export interface ViewOptions {
  // contextual filters
  args?: string[] | number[] | boolean[];
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


export interface ViewEntity {
  base_field: string;
  base_table: string;
  core: string;
  dependencies: {
    module: string[];
  };
  description: string;
  display: {
    [display: string]: {
      cache_metadata: {
        contexts: string[];
        'max-age': number;
        tags: string[];
      };
      display_options: {
        display_extenders: string[];
        path: string;
        display_plugin: string;
        display_title: string;
        id: string;
        position: number;
        pager?: {
          type: string;
          expose: {
            items_per_page: boolean;
            items_per_page_label: string;
            items_per_page_options: string;
            items_per_page_options_all: boolean;
            items_per_page_options_all_label: string;
            offset: boolean;
            offset_label: string;
          };
          items_per_page: number;
          id: number;
          offset: number;
          quantity: number;
          tags: {
            first: string;
            last: string;
            next: string;
            previous: string;
          };
          total_pages?: number;
        };
        row?: {
          options: {
            type: string;
            field_options: {
              [key: string]: {
                alias: string;
                raw_output: boolean;
              };
            };
          };
        };
        styles?: {
          options: {
            formats: string[];
            type: string;
          };
        };
      };
    };
  };
  id: string;
  label: string;
  langcode: string;
  module: string;
  status: boolean;
  tag: string;
  uuid: string;
}
