import { FieldNumber, FieldText, FieldEntityReference, FieldEntityReferenceUrl } from './field';

export interface FlagRegisteration {
  flag_id: string;
  entity_type: string;
  entity_id: number;
  uid: number;
}

export interface FlagEntity {
  id: FieldNumber[];
  uuid: FieldText[];
  flag_id: FieldEntityReference[];
  entity_type: FieldText[];
  entity_id: FieldNumber[];
  flagged_entity: FieldEntityReferenceUrl[];
  global: string[];
  uid: FieldEntityReferenceUrl[];
  session_id: string[];
  created: FieldNumber[];
}
