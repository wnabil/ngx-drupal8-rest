import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import {
  HttpOptions,
  CartOrder,
  CartProductAdd,
  CommerceOrder,
  CommerceOrderEntity,
  CommercePayment,
  CommercePaymentEntity,
} from '../models';

@Injectable()
export class CommerceService extends BaseService {
  // Commerce Cart API

  getCart(): Observable<CartOrder[]> {
    const httpOptions: HttpOptions = {
      method: 'get',
    };
    return this.request(httpOptions, '/cart');
  }

  getCartOrder(orderId: number): Observable<CartOrder> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [orderId],
    };
    return this.request(httpOptions, '/cart/{order}');
  }

  addToCart(data: CartProductAdd[]): Observable<CartOrder[]> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/cart/add', data);
  }

  updateCartOrderItems(
    orderId: number,
    items: { [key: number]: { quantity: number } }
  ): Observable<CartOrder> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [orderId],
    };
    return this.request(httpOptions, '/cart/{order}/items', items);
  }

  deleteCartOrderItem(orderId: number, itemId: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [orderId, itemId],
    };
    return this.request(httpOptions, '/cart/{order}/items/{item}');
  }

  deleteCartOrderItems(orderId: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [orderId],
    };
    return this.request(httpOptions, '/cart/{order}/items');
  }

  // Commerce Decoupled Checkout

  createOrder(order: CommerceOrder): Observable<CommerceOrderEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/commerce/order/create', order);
  }

  createPayment(
    orderId: number,
    payment: CommercePayment
  ): Observable<CommercePaymentEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
      frags: [orderId],
    };
    return this.request(
      httpOptions,
      '/commerce/payment/create/{order_id}',
      payment
    );
  }

  capturePayment(orderId: number, paymenId: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'post',
      frags: [orderId, paymenId],
    };
    return this.request(
      httpOptions,
      '/commerce/payment/capture/{order_id}/{payment_id}',
      {}
    );
  }
}
