import React from "react";
import { Edit, SimpleForm, TextInput, SelectInput, NumberInput } from 'react-admin';


export const PeopleEdit = (props) => (
    <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <SelectInput source="sex" choices={
                    [
                        { id: false, name: 'Female', value: false },
                        { id: true, name: 'Male', value: true }
                    ]
                } />
                <NumberInput source="age" />
                <NumberInput source="height" />
            </SimpleForm>
    </Edit>
);
