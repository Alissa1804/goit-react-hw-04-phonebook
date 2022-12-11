import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    filterChange: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={this.props.filterChange}
        />
      </Label>
    );
  }
}

export default Filter;
