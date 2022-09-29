type AccountCreationNotifData = {
  id: number;
  currency: string;
  name: string;
};

type TransactionNotifData = {
  id: number;
  amount: number;
  from: string;
  to: string;
  unit: string;
};

export type Notif = {
  id: number;
  type: string;
  data: AccountCreationNotifData | TransactionNotifData;
};
