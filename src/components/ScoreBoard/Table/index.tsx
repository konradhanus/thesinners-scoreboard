import * as React from "react";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { scoreData } from "../scoreData";
import { connect } from "react-redux";
import { actionCreators } from "../action";

// function createData(place: number, name: string, time: number, points: number) {
//   return { place, name, time, points };
// }

// const rows = [
//   createData(1, "Frozen yoghurt", 159, 6.0),
//   createData(2, "Ice cream sandwich", 237, 9.0),
//   createData(3, "Eclair", 262, 16.0),
//   createData(4, "Cupcake", 305, 3.7),
//   createData(5, "Gingerbread", 356, 16.0),
// ];

interface information {
  title: string;
}

const TableTitle = (props: information) => {
  return <TableCell>{props.title}</TableCell>;
};

const date = new Date().toLocaleTimeString();



function ScoreTable(props: {players: any}) {

  const scoreData = props.players ? Object.keys(props.players).map((key) => {

    const p = props.players[key].player;
    
    return ({
          title: "untitled",
          name: p.name && p.name,
          status: "nothing",
          points: p.name && p.points,
          value: "0",
        })
   }) : [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
        <TableHead>
          <TableRow>
            <TableTitle title="Pozycja"></TableTitle>
            <TableTitle title="Nazwa"></TableTitle>
            <TableTitle title="Czas"></TableTitle>
            <TableTitle title="Punkty"></TableTitle>
          </TableRow>
        </TableHead>
        <TableBody>
          {scoreData.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{date}</TableCell>
              <TableCell align="right">{row.points
              // props.change
            }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default connect(
  (store: any) => ({
    change: store.change,
  }),
  actionCreators
)(ScoreTable);
