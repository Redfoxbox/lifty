import React, { useState, useEffect } from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Filter,
    DateField,
    ReferenceField,
    useQuery,
    SelectInput
} from 'react-admin'



export function WeightList(props) {


    const [people, setpeople] = useState([]);
    const { data: persons } = useQuery({
        type: 'getList',
        resource: 'people',
        payload: {
            pagination: { page: 1, perPage: 600 },
            sort: { field: 'name', order: 'ASC' },
            filter: {},
        },
    });

    useEffect(() => { if (persons) setpeople(persons.map((d) => ({ id: d.id, name: d.name }))); }, [persons]);

    const WeightFilter = (props) => (<Filter {...props}>

        <SelectInput source='peopleId' label='Person' choices={persons} resettable alwaysOn />
    </Filter>)

    return (
        <List {...props} filters={<WeightFilter />}>
            <Datagrid rowClick='edit'>
                <TextField source='id' />
                <ReferenceField source="peopleId" reference="people">
                    <TextField source="name" />
                </ReferenceField>
                <NumberField source='weight' />
                <DateField source='date'  showTime/>

            </Datagrid>

        </List>

    );

}
