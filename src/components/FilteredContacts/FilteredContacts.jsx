import React from "react";
import { nanoid } from "nanoid";

export default function FilteredContacts({ contacts, filter }) {
  return contacts.map((contact) => {
    const id = nanoid();
    return (
      contact.name.toLowerCase().includes(filter) && (
        <p key={id}>
          {contact.name}: {contact.number}
        </p>
      )
    );
  });
}
