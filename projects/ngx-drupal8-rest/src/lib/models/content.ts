import {
  FieldTextArea, FieldDate, FieldComment, FieldBoolean, FieldText, FieldNumber, FieldPath,
  FieldEntityReferenceUrl, FieldEntityReference
} from './field';

export interface ContentEntity {
  title: FieldText[];
  type?: FieldEntityReference[];
  body?: FieldTextArea[];
  changed?: FieldDate[];
  comment?: FieldComment[];
  created?: FieldDate[];
  default_langcode?: FieldBoolean[];
  langcode?: FieldText[];
  nid?: FieldNumber[];
  path?: FieldPath[];
  promote?: FieldBoolean[];
  revision_log?: FieldText[];
  revision_timestamp?: FieldDate[];
  revision_translation_affected?: FieldBoolean[];
  revision_uid?: FieldEntityReferenceUrl[];
  status?: FieldBoolean[];
  sticky?: FieldBoolean[];
  uid?: FieldEntityReferenceUrl[];
  uuid?: FieldText[];
  vid?: FieldNumber[];
}

export interface ContentType {
  dependencies: string[];
  description: string;
  display_submitted: boolean;
  help: string;
  langcode: string;
  name: string;
  new_revision: boolean;
  preview_mode: number;
  status: boolean;
  type: string;
  uuid: string;
}
