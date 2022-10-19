import { useState, useEffect } from "react";

import Input from "./components/input/Input";
import Dropdown from "./components/dropdown/dropdown";
import Spacing from "./components/layout/Spacing";
import Flex from "./components/layout/Flex";
import Button from "./components/atoms/Button";
import TransactionTable from "./components/table/TransactionTable";
import AccountTable from "./components/table/AccountTable";
import Title from "./components/typography/Title";
import { NOTIFICATIONS_TYPES } from "./utils/data.utils";
import { NotifType } from "./utils/services.utils";

import type { Notif } from "utils/types.utils";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [notifications, setNotifications] = useState<null | {
    transactions: Notif[];
    filtered_transactions: Notif[];
    account_notifications: Notif[];
  }>(null);
  const [currencies, setCurrencies] = useState([]);

  const onShortcutClickHandler = (type: NotifType) => {
    switch (type) {
      case NotifType.TRANSACTION_RECEIVED:
        setSearchText("TRANSACTION_RECEIVED");
        break;

      case NotifType.TRANSACTION_SENT:
        setSearchText("TRANSACTION_SENT");
        break;

      case NotifType.ACCOUNT_CREATED:
        setSearchText("ACCOUNT_CREATED");
        break;
    }
  };

  const removeDuplicates = (array: string[]): string[] =>
    array.filter((item, index) => array.indexOf(item) === index && item);

  const onCurrencyFilterClickHandler = (currency: string) => {
    const { transactions }: { transactions: Notif[] } = notifications;

    const filtered_transactions = transactions?.filter(
      (transaction_notif) => transaction_notif.data.unit === currency,
    );

    setNotifications({ ...notifications, filtered_transactions: filtered_transactions });
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`http://localhost:5000/search?q=${searchText}`);
        const data = await res.json();
        const all_transactions = data.filter(
          (notif: Notif) =>
            notif.type === "TRANSACTION_RECEIVED" || notif.type === "TRANSACTION_SENT",
        );
        setNotifications({
          transactions: all_transactions,
          filtered_transactions: all_transactions,
          account_notifications: data.filter((notif: Notif) => notif.type === "ACCOUNT_CREATED"),
        });
        const tempCurrencies = data.map((notif: Notif) => notif.data.unit);
        setCurrencies(removeDuplicates(tempCurrencies));
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, [searchText, setNotifications]);

  return (
    <Flex flex_direction="column">
      <Input value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      <Spacing mt={2} mp={2}>
        <Flex row_gap={1} column_gap={1}>
          {NOTIFICATIONS_TYPES.map((notif_type) => {
            return (
              <Button onClick={() => onShortcutClickHandler(notif_type.transaction_type)}>
                {notif_type.transaction_text}
              </Button>
            );
          })}
        </Flex>
      </Spacing>

      <div>
        <Title mt={2} mb={1}>
          Transactions
        </Title>
        <Dropdown onChildClickHandler={onCurrencyFilterClickHandler} values={currencies} />

        <TransactionTable transactions={notifications?.filtered_transactions} />
      </div>
      <Flex justify_content="flex-start">
        <div>
          <Title mt={2} mb={1}>
            Account creation
          </Title>

          <AccountTable account_notif_table account_notifs={notifications?.account_notifications} />
        </div>
      </Flex>
    </Flex>
  );
};

export default App;
