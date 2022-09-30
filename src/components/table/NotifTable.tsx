import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { NOTIFICATIONS_TYPES } from "/src/utils/data.utils";

import SkeletonTableRow from "./SkeletonTableRow";

import type { Notif } from "utils/types.utils";

const NotifTable = ({ notifs }) => {
  console.log(notifs);

  const getNotifType = (type) => {
    switch (type) {
      case NOTIFICATIONS_TYPES.TRANSACTION_RECEIVED:
        return "Received";

      case NOTIFICATIONS_TYPES.TRANSACTION_SENT:
        return "Sent";
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1400 }}>
        <colgroup>
          <col width="20%" />
          <col width="5%" />
          <col width="5%" />
          <col width="35%" />
          <col width="35%" />
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
          {notifs ? (
            notifs.map((notif) => (
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
              <SkeletonTableRow />
              <SkeletonTableRow />
              <SkeletonTableRow />
              <SkeletonTableRow />
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NotifTable;
