import { useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';

import useLocalStorage from '../hooks/useLocalStorage';

import { Container, MainTitle, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFIlter/SearchFIlter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const contacts = useSelector(getContacts);

  // const addContact = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };

  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     Report.info('SORRY', `${newContact.name} is already in contacts.`, 'Ok');
  //   } else {
  //     setContacts(prevState => [...prevState, newContact]);
  //   }
  // }; //!?

  const changedFilter = evt => {
    setFilter(evt.target.value.trim());
  };

  // const searchContact = () => {
  //   const normalisedFilter = filter.toLowerCase();

  //   const searchedContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalisedFilter)
  //   );

  //   return searchedContacts;
  // }; //!

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(element => element.id !== id));
  // }; //!?

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <SearchFilter search={changedFilter} />
      {contacts.length ? (
        <ContactList />
      ) : (
        <Notification message="There are no contacts in the phone book" />
      )}
    </Container>
  );
};

export default App;
