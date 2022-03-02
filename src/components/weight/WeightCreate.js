import React, { useState, useEffect } from 'react';
import {
    Create,
    SimpleForm,
    DateTimeInput,
    SelectInput,
    useNotify,
    useRefresh,
    useRedirect,
    useQuery,
    TextInput,
    NumberInput,
} from 'react-admin';

export const WeightCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify(`New Weight created `);
        //redirect(`/Weights?filter=%7B"id"%3A"${data.id}"%7D`);
        redirect(`/Weights`);
        refresh();
    };

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

    return (
        <Create {...props} title='Create new Weight' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput disabled source='id' defaultValue='1' />
                <SelectInput source='peopleId' choices={persons} />
                <NumberInput source='weight' />
                <DateTimeInput source='date' />

            </SimpleForm>
        </Create>
    );
};
