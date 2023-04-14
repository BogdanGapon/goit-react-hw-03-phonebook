import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
export const ContactFilter = ({ value, handleFindContacts }) => {
  const IdContacts = nanoid();
  return (
    <>
      <label htmlFor={IdContacts}></label>
      <input
        id={IdContacts}
        type="text"
        name="filter"
        value={value}
        onChange={handleFindContacts}
      />
    </>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFindContacts: PropTypes.func.isRequired,
};
