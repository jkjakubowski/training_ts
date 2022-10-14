import { NotifType } from "../utils/services.utils";

type Notification = {
  transaction_type: NotifType;
  transaction_text: string;
};

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

export const NOTIFICATIONS_TYPES: Notification[] = [
  {
    transaction_type: NotifType.TRANSACTION_RECEIVED,
    transaction_text: "Received Tx",
  },
  { transaction_type: NotifType.TRANSACTION_SENT, transaction_text: "Sent Tx" },
  { transaction_type: NotifType.ACCOUNT_CREATED, transaction_text: "Account created" },
];
