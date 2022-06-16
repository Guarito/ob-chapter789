import { useRef } from "react";

const ContactForm = ({ addContact }) => {
  const nameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value
    };
    console.log(contact);
    addContact(contact);
  };

  return (
    <>
      <h1>Add new contact:</h1>
      <form>
        <input id="name" type="text" ref={nameRef} placeholder="First Name" />
        <br />
        <input
          id="lastName"
          type="text"
          ref={lastNameRef}
          placeholder="Last name"
        />
        <br />

        <br />
        <button onClick={handleSubmit} type="submit">
          Add contact
        </button>
      </form>
      <hr />
    </>
  );
};

export default ContactForm;
