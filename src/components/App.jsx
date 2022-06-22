import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';
import Form from './Form';
import Section from './Section';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
