import { Component } from "react";
import Contacts from "./components/Contacts/Contacts";
import Phonebook from "./components/Phonebook/Phonebook";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  hanleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  hadleSubmit = (e) => {
    e.preventDefault();
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
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
