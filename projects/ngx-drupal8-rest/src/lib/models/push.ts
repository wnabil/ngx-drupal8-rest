import { FieldText, FieldNumber, FieldEntityReferenceUrl } from './field';

export interface PushRegistration {
  token: FieldText[];
  network: FieldText[]; // ios or android
}

export interface PushRegisterationResponse {
  id: FieldNumber[];
  uuid: FieldText[];
  uid: FieldEntityReferenceUrl[];
  token: FieldText[];
  network: FieldText[];
  created: FieldNumber[];
  langcode: FieldText[];
  metatag: { value: { title: string } };
}
