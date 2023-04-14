import React, { Component } from 'react';
import { AppWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContact = localStorage.getItem('key');
    const parseSavedContact = JSON.parse(savedContact);

    this.setState({ contacts: parseSavedContact });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('key', JSON.stringify(this.state.contacts));
    }
  }

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  change = obj => {
    this.setState(prevState => ({
      contacts: [obj, ...prevState.contacts],
    }));
  };
  handleFindContacts = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  render() {
    return (
      <AppWrapper>
        <h2>Phonebook</h2>
        <ContactForm contacts={this.state.contacts} change={this.change} />
        <h3>Contacts</h3>
        <ContactFilter
          value={this.state.filter}
          handleFindContacts={this.handleFindContacts}
        />

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.onDeleteContact}
        />
      </AppWrapper>
    );
  }
}
