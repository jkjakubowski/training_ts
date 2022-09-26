import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Input from "./Input";

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

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [results, setResults] = useState<null | Notif[]>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`${API}/search?q=${searchText}`);
        const data = await res.json();
        setResults(data);
        setLoading(!isLoading);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, [searchText, setLoading, setResults]);

  console.log(results);

  return (
    <Container>
      <Input
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      {isLoading ? (
        <div>{"Loading..."}</div>
      ) : results ? (
        <div>
          {results.map((r) => (
            // TODO we must finalize this integration!! not very pretty like this
            <Item>{JSON.stringify(r)}</Item>
          ))}
        </div>
      ) : null}
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

export default App;
