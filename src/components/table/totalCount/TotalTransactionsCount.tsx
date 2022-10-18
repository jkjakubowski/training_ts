import Flex from "../../layout/Flex";
import TotalTableCount from "./TotalTableCount";

import { NotifType } from "../../../utils/services.utils";

const TotalTransactionsCount = ({ transactions }) => {
  console.log(transactions);
  const received_tx = transactions?.filter(
    (transaction) => transaction.type === NotifType.TRANSACTION_RECEIVED,
  );
  const sent_tx = transactions?.filter(
    (transaction) => transaction.type === NotifType.TRANSACTION_SENT,
  );
  return (
    <>
      <Flex>
        <TotalTableCount total_wording={"Total transactions"} transactions={transactions} />
        <TotalTableCount total_wording={"Sent transactions"} transactions={received_tx} />
        <TotalTableCount total_wording={"Received transactions"} transactions={sent_tx} />
      </Flex>
    </>
  );
};

export default TotalTransactionsCount;
