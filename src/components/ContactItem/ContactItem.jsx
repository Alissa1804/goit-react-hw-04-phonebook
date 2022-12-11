import PropTypes from 'prop-types';
import { Button, P, PN } from './ContactItem.styled';

export const ContactItem = ({
  contact: { name, number, id },
  deleteContact,
}) => {
  return (
    <>
      <PN>{name}</PN>
      <P>{number}</P>
      <Button onClick={() => deleteContact({ id, name })}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
