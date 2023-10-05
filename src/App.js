import BingoGenerator from './Components/BingoGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="App py-5"> {/* Use Bootstrap's Container with some padding */}
      <Row>
      <Col xs={12} md={{ span: 10, offset: 1 }}>
          <Container className="bg-transparent p-0 mb-4">
            <Container className="bg-transparent p-0 mb-4">
              <h1 className="text-center display-4">
                What I Eat in a Day as a <span style={{
                  color: 'red',
                  fontFamily: '"Comic Sans MS", cursive, sans-serif'
                }}
                >Fat</span> Person.
              </h1>
            </Container>
          </Container>
          <BingoGenerator />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
