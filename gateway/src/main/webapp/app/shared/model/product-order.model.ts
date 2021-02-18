import { Moment } from 'moment';
import { IInvoice } from 'app/shared/model/invoice.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  customerId?: number;
  orderItems?: string;
  placedDate?: string;
  status?: OrderStatus;
  code?: string;
  invoice?: IInvoice;
}

export const defaultValue: Readonly<IProductOrder> = {};
