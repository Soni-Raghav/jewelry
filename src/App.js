import "./App.css";
import Head from "./components/Head";
import ItemCard from "./components/ItemCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <>
      <Container style={{ padding: "5px" }}>
        <Row>
          <Col>
            <Head />
          </Col>
        </Row>
        <Row style={{ margin: "5px", justifyContent: "center" }}>
          <Col style={{ margin: "5px" }}>
            <ItemCard />
          </Col>
          <Col style={{ margin: "5px" }}>
            <ItemCard />
          </Col>
          <Col style={{ margin: "5px" }}>
            <ItemCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
