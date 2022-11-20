import styles from "./App.module.css";
import NavBar from './components/Navbar';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <h1>Welcome to Animeniacs!</h1>
      </Container>
    </div>
  );
}

export default App;