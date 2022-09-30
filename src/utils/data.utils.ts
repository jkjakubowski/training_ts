export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

export const NOTIFICATIONS_TYPES = {
  TRANSACTION_RECEIVED: "TRANSACTION_RECEIVED",
  TRANSACTION_SENT: "TRANSACTION_SENT",
  ACCOUNT_CREATED: "ACCOUNT_CREATED",
};
