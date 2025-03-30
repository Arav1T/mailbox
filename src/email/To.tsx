import React from 'react'

export default function to() {
  const [inputValue, setInputValue] = React.useState("");
  const [recipients, setRecipients] = React.useState([]);
  
  const contacts = ["john@example.com", "alice@example.com", "bob@example.com"]; // Example list

  const handleAddRecipient = (email) => {
    if (email && !recipients.includes(email)) {
      setRecipients([...recipients, email]);
    }
    setInputValue("");
  };

  const handleRemoveRecipient = (email) => {
    setRecipients(recipients.filter((r) => r !== email));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.toLowerCase().includes(inputValue.toLowerCase()) && !recipients.includes(contact)
  );

  return (
    <div className="p-4 border rounded-lg w-full max-w-lg">
      <label className="block font-bold mb-2">To:</label>
      <div className="flex flex-wrap gap-2 border p-2 rounded">
        {recipients.map((email) => (
          <div key={email} className="bg-blue-500 text-white px-2 py-1 rounded flex items-center">
            {email}
            <button onClick={() => handleRemoveRecipient(email)} className="ml-2 text-white">✕</button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddRecipient(inputValue)}
          placeholder="Type an email..."
          className="outline-none flex-1"
        />
      </div>

      {inputValue && filteredContacts.length > 0 && (
        <ul className="mt-2 border rounded bg-white">
          {filteredContacts.map((contact) => (
            <li key={contact} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleAddRecipient(contact)}>
              {contact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
