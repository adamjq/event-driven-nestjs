export enum EventDetailType {
  InvoicePaidEvent = 'payments.InvoicePaid',
}

export interface InvoicePaidEventData {
  user: {
    id: number;
    email: string;
  };
}
