import React, { Component } from "react";
import PropTypes from 'prop-types'
import * as Yup from 'yup';
import { Formik } from 'formik'

import { AddBtn,StyledError, Label, MainForm, Input } from './Form.styled'



const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(32, 'to long').required('Required'),
    number: Yup.string().min(7, 'Too Short!').max(10, 'to long').required('Required')
});

class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    }

    render() {

        return (
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                onSubmit={this.props.handleSubmit}
                validationSchema={schema}
            >
                <MainForm>
                    <Label>
                        Name
                        <Input 
                            type="text"
                            name="name"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                        <StyledError name="name" component="div"/>
                    </Label>
                    <Label>
                        Number
                        <Input 
                            type="text"
                            name="number"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        
                        />
                        <StyledError name="number" component="div"/>
                    </Label>
                    <AddBtn
                        type="submit"
                    >add</AddBtn>
                </MainForm>
                
            </Formik>
        )
    }
}

ContactsForm.propTypes = {
    handleSubmit: PropTypes.func,
}

export default ContactsForm