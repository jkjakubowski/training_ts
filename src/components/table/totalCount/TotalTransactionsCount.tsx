import Flex from "../../layout/Flex";
import Spacing from "../../layout/Spacing";
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
      <Spacing mt={1}>
        <Flex justify_content="flex-start" column_gap={1}>
          <TotalTableCount total_wording={"Total transactions"} transactions={transactions} />
          <TotalTableCount total_wording={"Sent transactions"} transactions={received_tx} />
          <TotalTableCount total_wording={"Received transactions"} transactions={sent_tx} />
        </Flex>
      </Spacing>
    </>
  );
};

export default TotalTransactionsCount;
