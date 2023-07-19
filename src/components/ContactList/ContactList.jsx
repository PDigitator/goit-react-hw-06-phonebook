// import PropTypes from 'prop-types'; //!

import ListElement from 'components/ListElement/ListElement';
import { List, ListItem } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  console.log('ContactList contacts', contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalisedFilter = filter.toLowerCase();

  const searchedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <List>
      {searchedContacts
        .sort((elementA, elementB) =>
          elementA.name.localeCompare(elementB.name)
        )
        .map(element => (
          <ListItem key={element.id}>
            <ListElement
              element={element}
              // deleteContact={() => dispatch(deleteContact(element.id))}
            />
          </ListItem>
        ))}
    </List>
  );
};

// ContactList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// }; //!

export default ContactList;
