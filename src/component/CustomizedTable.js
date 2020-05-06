import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#EEF7FC',
      color: theme.palette.common.black,
      fontSize:18
    },
    body: {
      fontSize: 14,
      
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const columns = [
  { id: 'leaveid', label: 'Leave ID', minWidth: 170, align:'center'},
  { id: 'startdate', label: 'Start Date', minWidth: 100, align:'center' },
  {
    id: 'enddate',
    label: 'End Date',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(leaveid, startdate, enddate, status) {
  return { leaveid, startdate, enddate, status };
}

const rows = [
  createData('MN-5439-013', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-012', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-011', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-010', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-009', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-008', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-007', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-006', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-005', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-004', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-003', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-002', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
  createData('MN-5439-001', 'April 17, 2020', 'Mei 17, 2020', 'Waiting'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    
  },
  container: {
    maxHeight: 270,
  },
});

export default function CustomizedTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead  >
            <TableRow >
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.table}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                       
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                       
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}