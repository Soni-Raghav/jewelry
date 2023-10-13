import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import crown from "./images/crown.png";

function ItemCard() {
  return (
    <Card style={{ width: "18rem", padding: "2px" }}>
      <Card.Img variant="top" src={crown} />
      <Card.Body>
        <Card.Title>Rings</Card.Title>
        <Card.Text>Handmade Earrings</Card.Text>
        <Button variant="primary">Click To View</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
