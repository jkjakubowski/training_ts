import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import SkeletonTableRow from "./SkeletonTableRow";

import { getNotifType } from "../../utils/services.utils";
import type { Notif } from "src/utils/types.utils";

const TransactionTable = ({
  notifs,
  account_notif_table,
}: {
  notifs: Notif[];
  account_notif_table: boolean;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: account_notif_table ? 800 : 1400 }}>
        {!account_notif_table && (
          <colgroup>
            <col width="20%" />
            <col width="5%" />
            <col width="5%" />
            <col width="35%" />
            <col width="35%" />
          </colgroup>
        )}

        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            {!account_notif_table && <TableCell>Amount</TableCell>}
            <TableCell>Currency</TableCell>
            <TableCell>{account_notif_table ? "Name" : "From"}</TableCell>
            {!account_notif_table && <TableCell>To</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {notifs ? (
            notifs.map((notif) => (
              // narrow
              <TableRow key={notif.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {getNotifType(notif.type)}
                </TableCell>
                <TableCell>{notif.data.amount}</TableCell>
                <TableCell>{notif.data.unit}</TableCell>
                <TableCell>{notif.data.from}</TableCell>
                <TableCell>{notif.data.to}</TableCell>
              </TableRow>
            ))
          ) : (
            <>
              <SkeletonTableRow account_notif_table={account_notif_table} />
              <SkeletonTableRow account_notif_table={account_notif_table} />
              <SkeletonTableRow account_notif_table={account_notif_table} />
              <SkeletonTableRow account_notif_table={account_notif_table} />
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
