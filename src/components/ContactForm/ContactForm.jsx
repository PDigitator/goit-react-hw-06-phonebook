// import { useState } from 'react'; //!
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types'; //!
import { Report } from 'notiflix';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import Button from 'components/Button/Button';

import { Form, Label, Input } from 'components/ContactForm/ContactForm.styled';

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState(''); //!
  const contacts = useSelector(getContacts);

  console.log('contacts :>> ', contacts); //!

  const dispatch = useDispatch();

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
  // }; //!

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;

    console.log('form.elements.name', name.value); //!
    console.log('form.elements.number', number.value); //!

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      Report.info('SORRY', `${name.value} is already in contacts.`, 'Ok');
    } else {
      dispatch(addContact(name.value, number.value));
    }

    form.reset();
  };

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       break;
  //   }
  // }; //!

  // const handleSubmitsss = event => {
  //   event.preventDefault();

  //   addContact({ name, number });

  //   reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // }; //!

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button text="Add contact" />
    </Form>
  );
};

// ContactForm.propTypes = { addContact: PropTypes.func }; //!

export default ContactForm;
