import React from "react";
import { nanoid } from "nanoid";

export default function Contacts({ contacts }) {
  return contacts.map((contact) => {
    const id = nanoid();
    return (
      <p key={id}>
        {contact.name}: {contact.number}
      </p>
    );
  });
}
