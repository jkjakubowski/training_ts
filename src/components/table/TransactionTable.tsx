import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import SkeletonTableRow from "./SkeletonTableRow";
import TotalTransactionsCount from "./totalCount/TotalTransactionsCount";

import { getNotifType } from "../../utils/services.utils";
import type { Notif } from "src/utils/types.utils";

const TransactionTable = ({
  transactions,
}: {
  transactions: Notif[];
  transaction_notif_table: boolean;
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1400 }}>
          <colgroup>
            <col width="270px" />
            <col width="90px" />
            <col width="90px" />
            <col width="475px" />
            <col width="475px" />
          </colgroup>

          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions ? (
              transactions.map((transaction) => (
                // narrow
                <TableRow
                  key={transaction.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {getNotifType(transaction.type)}
                  </TableCell>
                  <TableCell>{transaction.data.amount}</TableCell>
                  <TableCell>{transaction.data.unit}</TableCell>
                  <TableCell>{transaction.data.from}</TableCell>
                  <TableCell>{transaction.data.to}</TableCell>
                </TableRow>
              ))
            ) : (
              <>
                <SkeletonTableRow transaction_notif_table />
                <SkeletonTableRow transaction_notif_table />
                <SkeletonTableRow transaction_notif_table />
                <SkeletonTableRow transaction_notif_table />
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TotalTransactionsCount transactions={transactions} />
    </>
  );
};

export default TransactionTable;
