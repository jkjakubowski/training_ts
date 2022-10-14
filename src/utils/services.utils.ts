export enum NotifType {
  TRANSACTION_RECEIVED = "TRANSACTION_RECEIVED",
  TRANSACTION_SENT = "TRANSACTION_SENT",
  ACCOUNT_CREATED = "ACCOUNT_CREATED",
}

export const getNotifType = (type: NotifType) => {
  switch (type) {
    case NotifType.TRANSACTION_RECEIVED:
      return "Received";

    case NotifType.TRANSACTION_SENT:
      return "Sent";

    case NotifType.ACCOUNT_CREATED:
      return "Account creation";
  }
};
