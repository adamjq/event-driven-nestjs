import { EventDetailType, InvoicePaidEventData } from './events';

export interface EventBridgeEvent {
  version: string;
  id: string;
  'detail-type': EventDetailType;
  source: string;
  account: string;
  time: string;
  region: string;
  resources: any[];
  detail: InvoicePaidEventData;
}
