import { ContactItem } from './ContactList.styled.js';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, filter, deleteContact }) => {
  const createMarkupByFoundContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const arrayOfFoundContacts = createMarkupByFoundContacts();

  return (
    <ul>
      {arrayOfFoundContacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
