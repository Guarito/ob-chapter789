import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Contact from "./contact";
import ContactForm from "./contactForm";

const ContactList = () => {
  const initialValue = [
    {
      id: "123456789",
      name: "First",
      lastName: "Contact",
      isOnline: false
    },
    {
      id: "1213141516",
      name: "Second",
      lastName: "Contact",
      isOnline: false
    }
  ];
  const [contacts, setContacts] = useState(initialValue);

  const addContact = (formValues) => {
    setContacts([
      ...contacts,
      {
        id: uuidv4(),
        ...formValues
      }
    ]);
  };

  const remove = (id) => {
    const tempContacts = [...contacts];
    const result = tempContacts.filter((contact) => contact.id !== id);

    setContacts(result);
  };

  const toggleStatus = (id) => {
    const tempContacts = [...contacts];
    const contactToChange = tempContacts.find((contact) => contact.id === id);
    contactToChange.isOnline = !contactToChange.isOnline;

    setContacts(tempContacts);
  };
  return (
    <>
      <ContactForm addContact={addContact} />
      <h2>Contact List:</h2>
      <ul style={{ listStyle: "none" }}>
        {contacts.map((item) => (
          <Contact
            contact={item}
            key={item.id}
            remove={remove}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
