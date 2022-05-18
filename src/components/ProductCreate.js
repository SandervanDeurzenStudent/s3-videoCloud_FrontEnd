// import React from 'react'
// import {
//     Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm
// } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';



// const ProductCreate = props => {
//     const notify = useNotify();
//     const refresh = useRefresh();
//     const redirect = useRedirect();

//     const onSuccess = ({data}) => {
//         redirect(`/products/${data.id}`);
//         notify(`File uploaded!`);
//         refresh();
//     };

    
//     return (
//         <Create {...props} title='Create new product' onSuccess={onSuccess}>
//             <SimpleForm>
//                 <File source='mp3' />
//                 <TextInput source='name' />
//             </SimpleForm>
//         </Create>
//     );
    
// };

// export default ProductCreate