import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const UserFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='User Email' source='email' resettable alwaysOn />
</Filter>)

function UserList(props) {
  return (
    <div>
      <List {...props}>
        <Datagrid>
            <TextField source="username" />
        </Datagrid>
    </List>
    </div>
  );
  
}

export default UserList