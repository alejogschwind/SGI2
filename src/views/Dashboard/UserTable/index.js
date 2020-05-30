import React, { useState } from 'react';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardContent,
  CardActions,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  TablePagination,
  Avatar
} from '@material-ui/core';

const UserTable = props => {
  const { className, users, ...rest} = props;
  return (
    <Card
      {...rest}
    >
      <CardContent>
        <PerfectScrollbar>
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Mail</TableCell>
                  <TableCell>Telefono</TableCell>
                  <TableCell>Fecha de Registro</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  users.slice(0, 5).map(user => (
                  <TableRow
                    hover
                    key={user.id}
                  >
                    <TableCell>
                      <Checkbox
                        color="primary"
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <Avatar
                          src={user.avatarUrl}
                        >
                          AG
                        </Avatar>
                        <Typography variant="body1">{user.firstName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      {moment(user.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                  </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions>
        <TablePagination
          component="div"
        />
      </CardActions>
    </Card>
  );
};

export default UserTable;