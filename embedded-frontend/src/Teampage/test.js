import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TableVirtuoso } from 'react-virtuoso';

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24],

];

function createData(id, dessert, calories, fat) {
  return { id, dessert, calories, fat };
}

const columns = [
  {
    width: 200,
    label: 'Store',
    dataKey: 'dessert',
  },
  {
    width: 120,
    label: 'Amount',
    dataKey: 'calories',
    numeric: true,
  },
  {
    width: 120,
    label: 'Payment Date',
    dataKey: 'fat',
    numeric: true,
  },

 
];

// const rows = Array.from({ length: 200 }, (_, index) => {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   console.log("randomSelection", randomSelection)
// //   const randomSelection = sample;
//   return createData(index, ...randomSelection);
// });
// const rows = sample

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}
// function Store(id, name, amount, createdAt){
//     this.id = id
//     this.name = name;
//     this.amount = amount;
//     this.createdAt = createdAt;
// }
const rows = []
export default function ReactVirtualizedTable(props) {
    const response = props.myProp;
    response.forEach(item => {
        const newItem = [item.id, item.storeName, item.amount, item.createdAt];
        sample.push(newItem);
        // const store = new Store(item.id, item.storeName, item.amount, item.createdAt);
        rows.push(createData(item.id, item.storeName, item.amount, item.createdAt))
        // rows.push(store)
    });
    console.log("sample",sample)
    // rows Date 최신순으로 sorting
    rows.sort((a, b) => new Date(b.fat) - new Date(a.fat));
    console.log("rows", rows)
    
  return (
    <Paper style={{ height: 400, width: '100%' }}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          style={{ fontFamily: 'roboto' }}
        >
          영수증 상세 내역
        </Typography>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
