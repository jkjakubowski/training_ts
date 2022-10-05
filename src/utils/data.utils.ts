type Notification = {
  transaction_type: string;
  transaction_text: string;
};

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

export const NOTIFICATIONS_TYPES: Notification[] = [
  {
    transaction_type: "TRANSACTION_RECEIVED",
    transaction_text: "Received Tx",
  },
  { transaction_type: "TRANSACTION_SENT", transaction_text: "Sent Tx" },
  { transaction_type: "ACCOUNT_CREATED", transaction_text: "Account created" },
];
