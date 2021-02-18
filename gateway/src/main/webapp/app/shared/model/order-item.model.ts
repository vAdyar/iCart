import { OrderItemStatus } from 'app/shared/model/enumerations/order-item-status.model';

export interface IOrderItem {
  id?: number;
  productId?: number;
  quantity?: number;
  totalPrice?: number;
  status?: OrderItemStatus;
}

export const defaultValue: Readonly<IOrderItem> = {};
