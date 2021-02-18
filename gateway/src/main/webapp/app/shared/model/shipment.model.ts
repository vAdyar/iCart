import { Moment } from 'moment';
import { IInvoice } from 'app/shared/model/invoice.model';

export interface IShipment {
  id?: number;
  trackingCode?: string;
  date?: string;
  details?: string;
  invoice?: IInvoice;
}

export const defaultValue: Readonly<IShipment> = {};
