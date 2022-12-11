import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Form, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addContact({ ...this.state, id: nanoid() });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.submitHandler}>
        <Label>
          {' '}
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          {' '}
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
