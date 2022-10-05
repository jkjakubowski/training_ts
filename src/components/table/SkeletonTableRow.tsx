import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { Skeleton } from "@mui/material";

const SkeletonTableRow = ({ account_notif_table }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </TableCell>
      {!account_notif_table && (
        <>
          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default SkeletonTableRow;
