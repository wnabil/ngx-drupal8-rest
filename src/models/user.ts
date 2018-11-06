import { FieldDate, FieldText, FieldBoolean, FieldEntityReference, FieldNumber, FieldEntityReferenceFile } from './field';

export interface LoginCredentials {
  name: string;
  pass: string;
}

export interface LoginResponse {
  current_user: {
    name: string;
    roles: string[];
    uid: number;
  };
  csrf_token: string;
  logout_token: string;
}

export interface UserEntity {
  name: FieldText[];
  access?: FieldDate[];
  changed?: FieldDate[];
  created?: FieldDate[];
  default_langcode?: FieldBoolean[];
  init?: FieldText[];
  langcode?: FieldText[];
  login?: FieldDate[];
  mail?: FieldText[];
  preferred_admin_langcode?: FieldText[];
  preferred_langcode?: FieldText[];
  roles?: FieldEntityReference[];
  status?: FieldBoolean[];
  timezone?: FieldText[];
  uid?: FieldNumber[];
  user_picture?: FieldEntityReferenceFile[];
  uuid?: FieldText[];
}
