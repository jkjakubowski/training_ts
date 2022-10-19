import Flex from "../../layout/Flex";
import Spacing from "../../layout/Spacing";
import TotalTableCount from "./TotalTableCount";

import { Notif } from "../../../utils/types.utils";
import { NotifType } from "../../../utils/services.utils";

const TotalTransactionsCount = ({ transactions }: { transactions: Notif[] }) => {
  const received_tx = transactions?.filter(
    (transaction) => transaction.type === NotifType.TRANSACTION_RECEIVED,
  );
  const sent_tx = transactions?.filter(
    (transaction) => transaction.type === NotifType.TRANSACTION_SENT,
  );

  const transactions_data = [
    { title: "Total transactions", tx: transactions },
    { title: "Sent transactions", tx: received_tx },
    { title: "Received transactions", tx: sent_tx },
  ];

  return (
    <>
      <Spacing mt={1}>
        <Flex justify_content="flex-start" column_gap={1}>
          {transactions_data.map((transaction_data) => (
            <TotalTableCount
              key={transaction_data.title}
              total_wording={transaction_data.title}
              transactions={transaction_data.tx}
            />
          ))}
        </Flex>
      </Spacing>
    </>
  );
};

export default TotalTransactionsCount;
