import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filterChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        onChange={filterChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
