import { FieldText, FieldNumber, FieldDate, FieldBoolean, FieldTextArea, FieldEntityReference, FieldPath } from './field';

export interface TaxonomyTermEntity {
  name: FieldText[];
  vid: FieldEntityReference[];
  changed?: FieldDate[];
  default_langcode?: FieldBoolean[];
  description?: FieldTextArea[];
  langcode?: FieldText[];
  parent?: FieldEntityReference[];
  path?: FieldPath[];
  status?: FieldBoolean[];
  tid?: FieldNumber[];
  uuid?: FieldText[];
  weight?: FieldNumber[];
}

export interface TaxonomyVocabularyEntity {
  dependencies: string[];
  description: string;
  hierarchy: number;
  langcode: string;
  name: string;
  status: boolean;
  uuid: string;
  vid: string;
  weight: number;
}
