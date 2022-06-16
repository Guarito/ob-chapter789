const Contact = ({ contact, remove, toggleStatus }) => {
  const { id, name, lastName, isOnline } = contact;
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "1rem",
        margin: "1rem"
      }}
    >
      <li>
        <div>
          <span>
            Status:{" "}
            {isOnline ? (
              <b style={{ color: "green" }}>Online</b>
            ) : (
              <i style={{ color: "red" }}>Disconnected</i>
            )}
          </span>
          <h2>
            {name} {lastName}
          </h2>

          <button onClick={() => remove(id)}>Delete</button>
          <button onClick={() => toggleStatus(id)}>Toggle Status</button>
        </div>
      </li>
    </div>
  );
};

export default Contact;
