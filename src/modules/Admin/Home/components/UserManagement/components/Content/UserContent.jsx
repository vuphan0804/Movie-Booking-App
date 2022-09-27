// Material UI 5
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import UserConfirmPopUp from '../UserConfirmPopUp/UserConfirmPopUp';
// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// Scss
import './content.scss';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../slices/userSlice';
// router-dom
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Main
import { useState } from 'react';
// Global Variable

const columns = [
  { id: 'name', label: 'Username', minWidth: 120 },
  { id: 'code', label: 'Name', minWidth: 170 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 180,
    align: 'left',
  },
  {
    id: 'password',
    label: 'Password',
    minWidth: 150,
    align: 'left',
  },

  {
    id: 'phoneNumber',
    label: 'Phone Number',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'userType',
    label: 'User Type',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'center',
  },
];

export default function Content() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { users } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Paper sx={{ maxWidth: 1300, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Link to="addUser">
                <Button variant="contained" sx={{ mr: 1 }}>
                  Add User
                </Button>
              </Link>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={user.taiKhoan}
                    >
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {user.taiKhoan}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {user.hoTen}
                      </TableCell>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="left">{user.matKhau}</TableCell>
                      <TableCell align="left">{user.soDT}</TableCell>
                      <TableCell align="center">
                        {user.maLoaiNguoiDung}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`updateUser/${user.taiKhoan}`}>
                          <EditIcon
                            className="mr-2 cursor-pointer"
                            sx={{ color: 'blue', fontSize: '30px' }}
                          />
                        </Link>
                        <UserConfirmPopUp
                          userData={user}
                          isOpen={false}
                          onClose={handleClose}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Paper>
  );
}
