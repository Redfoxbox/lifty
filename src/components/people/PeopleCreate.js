import React from 'react';
import {
    Create,
    SimpleForm,
    SelectInput,
    NumberInput,
    useNotify,
    useRefresh,
    useRedirect,
    TextInput,
} from 'react-admin';

export const PeopleCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify(`New person created `);
        redirect(`/people?filter=%7B"name"%3A"${data.name}"%7D`);
        refresh();
    };

    return (
        <Create {...props} title='Create new Person' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <NumberInput source="height" />
                <SelectInput source="sex" choices={
                    [
                        { id: false, name: 'Female', value: false },
                        { id: true, name: 'Male', value: true }
                    ]
                } />

            </SimpleForm>
        </Create>
    );
};
