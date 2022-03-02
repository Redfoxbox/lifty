import React from 'react';
import env from './config/env';
import { Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { authProvider, httpClient } from './Auth';
import { PeopleCreate, PeopleEdit, PeopleList } from './components/people';
import { WeightCreate, WeightList, WeightEdit } from './components/weight';

function App() {
  return (
    <Admin dataProvider={lb4Provider(env.REACT_APP_API_URL, httpClient)} authProvider={authProvider}>
      <Resource name='people' list={PeopleList} edit={PeopleEdit} create={PeopleCreate} />
      <Resource name='weights' list={WeightList} edit={WeightEdit} create={WeightCreate} />
    </Admin>
  );
}

export default App;
