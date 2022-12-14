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

const AccountTable = ({ account_notifs }: { account_notifs: Notif[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }}>
        <colgroup>
          <col width="300px" />
          <col width="200px" />
          <col width="300px" />
        </colgroup>

        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {account_notifs ? (
            account_notifs.map((account_notif) => (
              // narrow
              <TableRow
                key={account_notif.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {getNotifType(account_notif.type)}
                </TableCell>

                <TableCell>{account_notif.data.currency}</TableCell>
                <TableCell>{account_notif.data.name}</TableCell>
              </TableRow>
            ))
          ) : (
            <SkeletonTableRow account_notif_table />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountTable;
