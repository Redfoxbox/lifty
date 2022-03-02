import React from 'react';
import { Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { PeopleCreate, PeopleEdit, PeopleList } from './components/people';
import {WeightCreate, WeightList} from './components/weight';

function App() {
  return (
    <Admin dataProvider={lb4Provider('http://localhost:4000')}>
      <Resource name='people' list={PeopleList} edit={PeopleEdit} create={PeopleCreate} />
      <Resource name='weights' list={WeightList} create={WeightCreate}/>
    </Admin>
  );
}

export default App;
