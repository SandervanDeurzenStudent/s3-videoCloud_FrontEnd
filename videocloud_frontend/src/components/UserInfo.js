import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const ProductFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Product Name' source='title' resettable alwaysOn />
</Filter>)

function ProductList(props) {
  return (
    <List {...props} filters={<ProductFilter />}>
        <Datagrid>
            <TextField source='name' />
        </Datagrid>
    </List>
  );
  
}

export default ProductList