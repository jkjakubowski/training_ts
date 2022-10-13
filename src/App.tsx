import { useState, useEffect } from "react";
import styled from "styled-components";

import Input from "./components/input/Input";
import Dropdown from "./components/dropdown/dropdown";
import NotifTable from "./components/table/NotifTable";
import Title from "./components/typography/Title";
import { NOTIFICATIONS_TYPES } from "./utils/data.utils";

import type { Notif } from "utils/types.utils";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const [transactions, setTransactions] = useState<null | Notif[]>(null);
  const [transactionNotifications, setTransactionNotifications] = useState(null);
  const [accountNotifications, setAccountNotifications] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  enum onShortcutType {
    TRANSACTION_RECEIVED = "TRANSACTION_RECEIVED",
    TRANSACTION_SENT = "TRANSACTION_SENT",
    ACCOUNT_CREATED = "ACCOUNT_CREATED",
  }

  const onShortcutClickHandler = (type: string) => {
    switch (type) {
      case "TRANSACTION_RECEIVED":
        setSearchText("TRANSACTION_RECEIVED");
        break;

      case "TRANSACTION_SENT":
        setSearchText("TRANSACTION_SENT");
        break;

      case "ACCOUNT_CREATED":
        setSearchText("ACCOUNT_CREATED");
        break;
    }
  };

  const removeDuplicates = (array: string[]): string[] =>
    array.filter((item, index) => array.indexOf(item) === index && item);

  const onCurrencyFilterClickHandler = (currency: string) => {
    switch (currency) {
      case "ETH":
        setTransactionNotifications(
          transactions.filter((transaction_notif) => transaction_notif.data.unit === "ETH"),
        );
        break;
      case "XTZ":
        setTransactionNotifications(
          transactions.filter((transaction_notif) => transaction_notif.data.unit === "XTZ"),
        );
        break;
      case "XRP":
        setTransactionNotifications(
          transactions.filter((transaction_notif) => transaction_notif.data.unit === "XRP"),
        );
        break;
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`http://localhost:5000/search?q=${searchText}`);
        const data = await res.json();
        setTransactions(data);
        setTransactionNotifications(
          data.filter(
            (notif: Notif) =>
              notif.type === "TRANSACTION_RECEIVED" || notif.type === "TRANSACTION_SENT",
          ),
        );
        setAccountNotifications(data.filter((notif: Notif) => notif.type === "ACCOUNT_CREATED"));
        const tempCurrencies = data.map((notif: Notif) => notif.data.unit);
        setCurrencies(removeDuplicates(tempCurrencies));
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, [searchText, setTransactions]);

  return (
    <Container>
      <Input value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      <ButtonContainer>
        {NOTIFICATIONS_TYPES.map((notif_type) => {
          return (
            <Button onClick={() => onShortcutClickHandler(notif_type.transaction_type)}>
              {notif_type.transaction_text}
            </Button>
          );
        })}
      </ButtonContainer>

      <TitleContainer>
        <Title mt="2" mb="1">
          Transactions
        </Title>
        <Dropdown onChildClickHandler={onCurrencyFilterClickHandler} values={currencies}></Dropdown>

        <NotifTable notifs={transactionNotifications}></NotifTable>
      </TitleContainer>
      <AccountTableContainer>
        <TitleContainer>
          <Title mt="2" mb="1">
            Account creation
          </Title>

          <NotifTable account_notif_table notifs={accountNotifications}></NotifTable>
        </TitleContainer>
      </AccountTableContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AccountTableContainer = styled.div`
  display: flex;

  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;

  &:hover,
  &:focus {
    background-color: #f082ac;
  }
`;

export default App;
