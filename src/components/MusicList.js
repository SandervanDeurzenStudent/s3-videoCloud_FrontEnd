import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const MusicFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Music Name' source='title' resettable alwaysOn />
</Filter>)

function MusicList(props) {
  return (
    <List {...props} filters={<MusicFilter />}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <TextField source='description' />
            <EditButton basePath='/musics' />
            <DeleteButton basePath='/musics' />
        </Datagrid>
    </List>
  );
  
}

export default MusicList