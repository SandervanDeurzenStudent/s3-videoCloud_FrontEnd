import * as React from "react";
import { Admin, Resource, fetchUtils, ListGuesser, List } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './components/MusicList'
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import ProductEdit from "./components/MusicEdit";
import UserCreate from "./components/UserCreate";
import ProductCreate from "./components/MusicCreate";
import simpleRestProvider from 'ra-data-simple-rest';
import MusicEdit from "./components/MusicEdit";
import MusicCreate from "./components/MusicCreate";
import MusicList from "./components/MusicList";

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Allow-Origin', '*');
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:8080/api',fetchJson );

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="Tracks" list={MusicList} edit={MusicEdit} create={MusicCreate} />
    </Admin>
);

export default App;