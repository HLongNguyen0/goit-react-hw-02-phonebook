import { Component } from "react";
import { Filter } from "./App.styled";
import Contacts from "./components/Contacts/Contacts";
import FilteredContacts from "./components/FilteredContacts/FilteredContacts";
import Phonebook from "./components/Phonebook/Phonebook";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  hanleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  hadleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.contacts.find(
        (contact) => contact.name === e.target.name.value
      )
    ) {
      return alert(e.target.name.value + " is already in contacts");
    }
    this.setState((prevState) => {
      const newContact = { name: prevState.name, number: prevState.number };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Phonebook
            handleInput={this.hanleInput}
            handleSubmit={this.hadleSubmit}
            name={this.state.name}
            number={this.state.number}
          />
        </Section>
        <Section title="Contacts">
          <>
            <Filter
              name="filter"
              value={this.state.filter}
              onChange={this.hanleInput}
            />
            {this.state.filter === "" ? (
              <Contacts contacts={this.state.contacts} />
            ) : (
              <FilteredContacts
                contacts={this.state.contacts}
                filter={this.state.filter}
              />
            )}
          </>
        </Section>
      </>
    );
  }
}

export default App;
