import { Container, Input, TextArea, Form, Button } from "./css/about-style";

const About: React.FC = () => {
  return (
    <Container>
      <h3>Kontakta oss</h3>
      <Form>
        <Input type="text" placeholder="Ditt namn" />
        <Input type="email" placeholder="Din email" />
        <Input type="number" placeholder="Telefonnummer" />
        <TextArea placeholder="Vad vill du skriva till oss?" />
        <Button type="submit">Skicka</Button>
      </Form>
    </Container>
  );
};

export default About;
