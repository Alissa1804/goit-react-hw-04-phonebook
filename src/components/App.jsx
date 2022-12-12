import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';
import { Container, Title, MTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContact) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const deleteContact = ({ id, name }) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
    Notiflix.Notify.info(`Contact with name ${name} is deleted`);
  };

  const filterChange = event => {
    setFilter(event.target.value);
  };

  const filterContacts = () => {
    const fcontacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
    return fcontacts;
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />
      <MTitle>Contacts</MTitle>
      <Filter filterChange={filterChange} filter={filter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={filterContacts()}
          deleteContact={deleteContact}
        />
      )}
    </Container>
  );
};
