import {
  FieldNumber, FieldTextArea, FieldEntityReference, FieldBoolean, FieldText, FieldEntityReferenceUrl
} from './field';

export interface Comment {
  comment_type: string;
  subject?: string;
  comment_body?: string;
  [key: string]: any; // custom fields
}

export interface CommentEntity {
  changed: FieldNumber[];
  cid: FieldNumber[];
  comment_body: FieldTextArea[];
  comment_type: FieldEntityReference[];
  content_translation_outdated: FieldBoolean[];
  content_translation_source: FieldText[];
  created: FieldNumber[];
  default_langcode: FieldBoolean[];
  entity_id: FieldEntityReferenceUrl[];
  entity_type: FieldText[];
  field_name: FieldText[];
  langcode: FieldText[];
  homepage: FieldText[];
  mail: FieldText[];
  name: FieldText[];
  pid: FieldNumber[];
  status: FieldBoolean[];
  subject: FieldText[];
  thread: FieldText[];
  uid: FieldEntityReferenceUrl[];
  uuid: FieldText[];
  [key: string]: any[]; // custom fields
}

export interface CommentType {
  description: string;
  id: string;
  label: string;
  langcode: string;
  status: boolean;
  target_entity_type_id: string;
  uuid: string;
}
