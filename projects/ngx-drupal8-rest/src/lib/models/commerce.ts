// Shared

import { FieldNumber, FieldText, FieldEntityReference, FieldEntityReferenceUrl, FieldBoolean } from './field';

export interface CommercePrice {
  number?: number;
  currency_code?: string;
  formatted?: string;
}

export interface CommerceOrderEntity {
  order_id: FieldNumber[];
  uuid: FieldText[];
  type: FieldEntityReference[];
  order_number: FieldText[];
  store_id: FieldEntityReference[];
  uid: FieldEntityReferenceUrl[];
  mail: FieldText[];
  ip_address: FieldText[];
  billing_profile: FieldEntityReferenceUrl[];
  order_items: FieldEntityReference[];
  total_price: CommercePrice[];
  total_paid: CommercePrice[];
  state: FieldText[];
  data: { paid_event_dispatched: boolean }[];
  locked: FieldBoolean[];
  created: FieldNumber[];
  changed: FieldNumber[];
  placed: FieldNumber[];
  completed: FieldNumber[];
  cart: FieldBoolean[];
  payment_gateway: FieldEntityReference[];
  payment_method: FieldEntityReference[];
}

export interface CommercePaymentEntity {
  payment_id: FieldNumber[];
  uuid: FieldText[];
  type: FieldText[];
  payment_gateway: FieldEntityReference[];
  payment_gateway_mode: FieldText[];
  payment_method: FieldEntityReference[];
  order_id: FieldEntityReference[];
  remote_id: FieldText[];
  amount: CommercePrice[];
  refunded_amount: CommercePrice[];
  state: FieldText[];
  expires: FieldNumber[];
  completed: FieldNumber[];
}

// Commerce Cart API

export interface CartOrder {
  order_id: number;
  uuid: string;
  store_id: number;
  order_items: CartOrderItem[];
  total_price: CommercePrice;
  coupons: any[]; // TODO
  order_number?: number;
}

export interface CartOrderItem {
  order_item_id: number;
  uuid: string;
  order_id: number;
  title: string;
  quantity: number;
  unit_price: CommercePrice;
  total_price: CommercePrice;
  purchased_entity: CartProduct;
}

export interface CartProduct {
  variation_id: number;
  uuid: string;
  type: string;
  product_id: number;
  sku: string;
  title: string;
  list_price: CommercePrice;
  price: CommercePrice;
  content_translation_source: string;
  content_translation_outdated: boolean;
  attribute_color: number;
  attribute_size: number;
  printful_reference: string;
  [key: string]: any; // custom fields
  weight?: number;
}

export interface CartProductAdd {
  purchased_entity_type: string;
  purchased_entity_id: number;
  quantity: number;
}

// Commerce Decoupled Checkout

export interface CommerceOrder {
  order?: {
    order_items?: CommerceOrdeItem[];
    type?: string;
    email?: string;
    store?: number;
    [key: string]: any; // custom fields
  };
  // User profile associated with the order.
  profile?: {
    type?: string;
    status?: boolean;
    [key: string]: any; // custom fields
  };
  // A user account associated with the transaction.
  // Creates a new user if didn't not exist, or uses existing one.
  // In the second case fields WILL NOT be updated.
  user: {
    mail: string;
    name?: string;
    status?: boolean;
    [key: string]: any; // custom fields
  };
  // If you want to process the payment alongside with order submission,
  // then fill in the details of this field. Otherwise you can skip it
  // and use other REST endpoints to handle payments separately.
  payment?: CommercePayment;
}

export interface CommerceOrdeItem {
  purchased_entity: {
    sku: string;
  };
  type?: string;
  title?: string;
  quantity?: number;
  unit_price?: CommercePrice;
  [key: string]: any; // custom fields
}

export interface CommercePayment {
  gateway: string;
  type: string;
  details?: any[];
  capture?: boolean;
}
