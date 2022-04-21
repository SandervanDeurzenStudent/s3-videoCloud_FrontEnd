import * as React from "react";
import { Admin, Resource, fetchUtils, ListGuesser, List } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './components/ProductList'
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import ProductEdit from "./components/ProductEdit";
import UserCreate from "./components/UserCreate";
import ProductCreate from "./components/ProductCreate";
import simpleRestProvider from 'ra-data-simple-rest';
import UserInfo from "./components/UserInfo";

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    // options.headers.set('Access-Control-Allow-Origin', '*');
    options.headers.set("X-Total-Count", "*");
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('https://api.mixcloud.com', fetchJson);
const user = "spartacus";
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
        <Resource name={user} list={UserInfo}  />
    </Admin>
);

export default App;