import React from 'react';
import { List, Datagrid, TextField,NumberField, Filter, SearchInput, SelectField} from 'react-admin'

const PeopleFilter = (props) => (<Filter {...props}>
    <SearchInput placeholder='Name' source='name' resettable alwaysOn />
</Filter>)

export function PeopleList(props) {
    return (
        <List {...props} filters={<PeopleFilter />}>
            <Datagrid rowClick='edit'>
                <TextField source='id' />
                <TextField source='name' />
                <SelectField source="sex" choices={
                    [
                        { id: false, name: 'Female', value: false },
                        { id: true, name: 'Male', value: true }
                    ]
                } />
                <NumberField source='age' />
                <NumberField source='height' />
            </Datagrid>

        </List>

    );

}
