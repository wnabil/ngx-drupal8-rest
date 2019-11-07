import {
  FieldBoolean, FieldText, FieldNumber,
  FieldEntityReferenceUrl, FieldEntityReference
} from './field';

export interface MediaEntity {
  name: FieldText[];
  bundle: FieldEntityReference[];
  mid?: FieldNumber[];
  uuid?: FieldText[];
  vid?: FieldNumber[];
  langcode?: FieldText[];
  revision_created?: FieldNumber[];
  revision_user?: FieldEntityReferenceUrl[];
  revision_log_message?: FieldText[];
  status?: FieldBoolean[];
  uid?: FieldEntityReferenceUrl[];
  created?: FieldNumber[];
  changed?: FieldNumber[];
  default_langcode?: FieldBoolean[];
  revision_translation_affected?: FieldBoolean[];
  moderation_state?: FieldText[];
  content_translation_source?: FieldText[];
  content_translation_outdated?: FieldBoolean[];
}

export interface MediaType {
  id: string;
  label: string;
  description: string;
  source: string;
  queue_thumbnail_downloads: boolean;
  new_revision: boolean;
  source_configuration: MediaSourceConfig;
  field_map: string[];
}

export interface MediaSourceConfig {
  source_field: string;
}
