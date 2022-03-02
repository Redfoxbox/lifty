import React from "react";
import { Edit, SimpleForm, TextInput, DateTimeInput, SelectInput, NumberInput } from 'react-admin';


export const PeopleEdit = (props) => (
    <Edit {...props}>
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
    </Edit>
);
