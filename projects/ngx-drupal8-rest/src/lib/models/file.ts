import { FieldDate, FieldNumber, FieldText, FieldBoolean, FieldEntityReferenceUser, FieldURL, FieldEntityReference } from './field';

export interface FileEntity {
  fid?: FieldNumber[];
  filename?: FieldText[];
  changed?: FieldDate[];
  created?: FieldDate[];
  filemime?: FieldText[];
  filesize?: FieldNumber[];
  langcode?: FieldText[];
  status?: FieldBoolean[];
  uid?: FieldEntityReferenceUser[];
  uri?: FieldURL[];
  uuid?: FieldText[];
}
