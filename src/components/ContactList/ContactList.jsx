import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem contact={contact} deleteContact={deleteContact} />
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
