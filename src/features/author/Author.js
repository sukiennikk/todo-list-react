import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
      <Header title="O autorze" />

      <Section
       title="Katarzyna Sukiennik"
       body={<>
  <p>
    <strong>Cześć!</strong> Jestem Kasia, mam 26 lat i mieszkam w Gdańsku.  
    Interesuję się technologią, rozwojem osobistym oraz tworzeniem prostych, użytecznych aplikacji — takich jak ta lista zadań.
  </p>

  <p><strong>Ulubione czynności:</strong></p>
  <ul>
    <li>Birdwatching</li>
    <li>Oglądanie filmów</li>
    <li>Akwarystyka!</li>
    <li>Aktywność fizyczna</li>
    <li>Miksowanie i tworzenie muzyki</li>
  </ul>
</>}/>
    </Container>
);