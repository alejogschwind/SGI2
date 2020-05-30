import React, { useState } from 'react';
import {
  CardContent, TableCell,
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

                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  )
}

export default UserCard;