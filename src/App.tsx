import { useState, useEffect } from "react";
import styled from "styled-components";

import Input from "./Input";
import Dropdown from "./components/dropdown/dropdown";
import NotifTable from "./components/table/NotifTable";
import { NOTIFICATIONS_TYPES } from "./utils/data.utils";

import type { Notif } from "utils/types.utils";

const API = "http://localhost:5000";

// type Notif = {
//   id: number;
//   type: string;
//   data: AccountCreationNotifData | TransactionNotifData;
// };

// type AccountCreationNotifData = {
//   id: number;
//   currency: string;
//   name: string;
// };

// type TransactionNotifData = {
//   id: number;
//   amount: number;
//   from: string;
//   to: string;
//   unit: string;
// };

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notif[]>(null);
  const [transactionNotifications, setTransactionNotifications] = useState(null);

  const onReceivedTxButtonClickHandler = async () => {
    await setSearchText(NOTIFICATIONS_TYPES.TRANSACTION_RECEIVED);
  };

  const onSentTxButtonClickHandler = () => {
    setSearchText(NOTIFICATIONS_TYPES.TRANSACTION_SENT);
  };

  const onCreatedAccountButtonClickHandler = () => {
    setSearchText(NOTIFICATIONS_TYPES.ACCOUNT_CREATED);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/search?q=${searchText}`);
        const data = await res.json();
        setTransactionNotifications(
          data.filter(
            (notif) => notif.type === "TRANSACTION_RECEIVED" || notif.type === "TRANSACTION_SENT",
          ),
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, [searchText, setResults]);

  console.log(isLoading);

  return (
    <Container>
      <Input value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
      <ButtonContainer>
        <Button onClick={onReceivedTxButtonClickHandler}>Received Tx</Button>
        <Button onClick={onSentTxButtonClickHandler}>Sent Tx</Button>
        <Button onClick={onCreatedAccountButtonClickHandler}>Account created</Button>
      </ButtonContainer>

      <Dropdown></Dropdown>
      {/* {isLoading ? (
        <Loader />
      ) : transactionNotifications?.length > 0 ? (
        <div>
          {transactionNotifications.map((r) => (
            <Item>{JSON.stringify(r)}</Item>
          ))}
          <NotifTable notifs={transactionNotifications}></NotifTable>
        </div>
      ) : (
        <p>{"No results found :("}</p>
      )} */}
      {/* {transactionNotifications ? ( */}
      <div>
        {/* {transactionNotifications.map((r) => (
            <Item>{JSON.stringify(r)}</Item>
          ))} */}
        <NotifTable notifs={transactionNotifications}></NotifTable>
      </div>
      {/* ) : ( */}
      {/* <p>{"No results found :("}</p>
      )} */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #ffffff;
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
