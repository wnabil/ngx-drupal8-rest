import { FieldDate, FieldNumber, FieldText, FieldBoolean, FieldEntityReferenceUrl, FieldURL, FieldEntityReference } from './field';

export interface FileEntity {
  fid?: FieldNumber[];
  filename?: FieldText[];
  changed?: FieldDate[];
  created?: FieldDate[];
  filemime?: FieldText[];
  filesize?: FieldNumber[];
  langcode?: FieldText[];
  status?: FieldBoolean[];
  uid?: FieldEntityReferenceUrl[];
  uri?: FieldURL[];
  uuid?: FieldText[];
}
