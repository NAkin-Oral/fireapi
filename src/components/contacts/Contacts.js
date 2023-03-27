import React from 'react';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Contacts = ({ editUser, data, handleDelete }) => {
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length === 0 ? (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  NO RESULT FOUND
                </TableCell>
              </TableRow>
            ) : (
              // Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın
              data?.map(item => (
                <TableRow key={item.id}>
                  <TableCell className="center">
                    {item.username.toUpperCase()}
                  </TableCell>
                  <TableCell className="center">{item.phone_number}</TableCell>
                  <TableCell className="center">{item.gender}</TableCell>
                  <TableCell
                    className="center"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon className="Delete" />
                  </TableCell>
                  <TableCell
                    className="center"
                    onClick={() =>
                      editUser(
                        item.id,
                        item.username,
                        item.phone_number,
                        item.gender
                      )
                    }
                  >
                    <EditIcon className="Edit" />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Contacts;
