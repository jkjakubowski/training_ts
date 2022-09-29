import { useState, useEffect } from "react";
import styled from "styled-components";

import Input from "./Input";
import Loader from "./components/loader/loader";
import Dropdown from "./components/dropdown/dropdown";

const API = "http://localhost:5000";

type Notif = {
  id: number;
  type: string;
  data: AccountCreationNotifData | TransactionNotifData;
};

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

const NOTIFICATIONS_TYPES = {
  received_tx: "TRANSACTION_RECEIVED",
  sent_tx: "TRANSACTION_SENT",
  created_account: "ACCOUNT_CREATED",
};

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notif[]>(null);

  const onReceivedTxButtonClickHandler = () => {
    setSearchText(NOTIFICATIONS_TYPES.received_tx);
  };

  const onSentTxButtonClickHandler = () => {
    setSearchText(NOTIFICATIONS_TYPES.sent_tx);
  };

  const onCreatedAccountButtonClickHandler = () => {
    setSearchText(NOTIFICATIONS_TYPES.created_account);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/search?q=${searchText}`);
        const data = await res.json();
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, [searchText, setResults]);

  console.log(results);
  console.log(isLoading);

  return (
    <Container>
      <Input
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      <Button onClick={onReceivedTxButtonClickHandler}>Received Tx</Button>
      <Button onClick={onSentTxButtonClickHandler}>Sent Tx</Button>
      <Button onClick={onCreatedAccountButtonClickHandler}>
        Account created
      </Button>

      <Dropdown></Dropdown>
      {isLoading ? (
        <Loader />
      ) : results?.length > 0 ? (
        <div>
          {results.map((r) => (
            // TODO we must finalize this integration!! not very pretty like this
            <Item>{JSON.stringify(r)}</Item>
          ))}
        </div>
      ) : (
        <p>{"No results found :("}</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Item = styled.div`
  border: 2px dashed red;
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
