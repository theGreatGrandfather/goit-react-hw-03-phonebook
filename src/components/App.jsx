import React, { Component } from 'react';
import { nanoid } from 'nanoid'

import Section from './Section/Section'
import ContactsForm from './Form/Form';
import { Contacts } from './Contacts/Contacts';


export default class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }
  componentDidMount() {
    const getContacts = JSON.parse(localStorage.getItem('contacts'));
    const stokContacts = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
    
    if (getContacts) {
      this.setState({
        contacts: getContacts,
      })
    } else {
      this.setState({
        contacts: stokContacts,
      })
    }
  }

  componentDidUpdate(prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: nextContacts } = this.state;    
      if (prevContacts !== nextContacts) {
        localStorage.setItem('contacts',  JSON.stringify(nextContacts))
      }
  }

  handleSubmit = (values, { resetForm }) => {
    resetForm();

    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    }
    };

  filterOnChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase()     
    })
  }

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    return (
      <>
        <Section
          title='Phonebook'
        >
          <ContactsForm
            handleSubmit={this.handleSubmit}
          />
        </Section>
        <Section
          title='Contacts'
        >
          <Contacts
            contacts={this.filteredContacts()}
            onChange={this.filterOnChange}
            value={this.state.filter}
            onClick={this.deleteContact}
          />
        </Section>
      </>
    )
  }
}
