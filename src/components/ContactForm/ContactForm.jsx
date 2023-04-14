import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, LabelInput, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';
export class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    change: PropTypes.func,
  };
  state = {
    name: '',
    number: '',
  };
  NameInputId = nanoid();
  NumberInputId = nanoid();

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value.trim(),
    });
  };

  handleSubmitContact = evt => {
    evt.preventDefault();

    if (
      this.props.contacts.some(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    )
      alert(`${this.state.name} is already used.`);
    else {
      this.props.change({
        name: this.state.name,
        id: nanoid(),
        number: this.state.number,
      });
    }

    this.resetNameInput();
  };

  resetNameInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmitContact}>
          <LabelInput htmlFor={this.NameInputId}> Name </LabelInput>
          <input
            id={this.NameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <LabelInput htmlFor={this.NumberInputId}> Number </LabelInput>
          <input
            id={this.NumberInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="[0-9\-]+"
            title="Number may contain only numbers."
            required
          />
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}
