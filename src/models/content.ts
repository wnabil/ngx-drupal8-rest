import {
  FieldTextArea, FieldDate, FieldComment, FieldBoolean, FieldText, FieldNumber, FieldPath,
  FieldEntityReferenceUser, FieldEntityReference
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
  revision_uid?: FieldEntityReferenceUser[];
  status?: FieldBoolean[];
  sticky?: FieldBoolean[];
  uid?: FieldEntityReferenceUser[];
  uuid?: FieldText[];
  vid?: FieldNumber[];
}
