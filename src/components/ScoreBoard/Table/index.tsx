import * as React from "react";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { scoreData } from "../Data/scoreData";
import { connect } from "react-redux";
import { actionCreators } from "../../Buttons/Button/action";

// import { listData, listDataOthers } from "../../ItemList/List/listData";

// interface information {
//   title: string;
// }

// const TableTitle = (props: information) => {
//   return <TableCell>{props.title}</TableCell>;
// };

// const date = new Date().toLocaleTimeString();

// function ScoreTable(props: {players: any}) {

//   const listData = props.players ? Object.keys(props.players).map((key) => {

//     const p = props.players[key].player;
    
//     return ({
//           // title: "untitled",
//           // name: p.name && p.name,
//           // status: "nothing",
//           // points: p.points && p.points,
//           // value: "0",
//           icon: p.icon && p.icon,
//           place: p.place && p.place,
//           avatar: p.avatar && p.avatar,
//           name: p.name && p.name,
//           level: p.level && p.level,
//           points: p.points && p.points,
//         })
//    }) : [];

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
//         <TableHead>
//           <TableRow>
//           <TableTitle title="Ikonka"></TableTitle>
//             <TableTitle title="Pozycja"></TableTitle>
//             <TableTitle title="Avatar"></TableTitle>
//             <TableTitle title="Imię"></TableTitle>
//             <TableTitle title="Level"></TableTitle>
//             <TableTitle title="Punkty"></TableTitle>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {listData
//           .sort((p, m) => (p.points < m.points) ? 1 : -1)
//           .map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell align="right">{row.icon}</TableCell>
//               <TableCell align="right">{row.place}</TableCell>
//               <TableCell align="right">avatar</TableCell>
//               <TableCell align="right">{row.name}</TableCell>
//               <TableCell align="right">{row.level}</TableCell>
//               <TableCell align="right">{row.points}
//               {/* {date} */}
//               {/* props.change */}
//             </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default connect(
//   (store: any) => ({
//     change: store.change,
//   }),
//   actionCreators
// )(ScoreTable);
