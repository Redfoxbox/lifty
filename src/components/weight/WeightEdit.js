import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput, DateField } from 'react-admin';


export const WeightEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateField source="date" showTime />
            <NumberInput source="weight" />
        </SimpleForm>
    </Edit>
);