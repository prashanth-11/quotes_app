import Card from "react-bootstrap/Card";

function BasicCard({ item }) {
  return (
    <Card
      style={{
        width: 300,
        height: 300,
        border: "1px solid rgb(49, 54, 61)",
        backgroundColor: "#1da7de",
        color: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Card.Img variant="top" src={item?.image} />
      <Card.Body>
        <Card.Title>Quote {item.id}</Card.Title>
        <Card.Text>
          our THOUGTHS will decide our JOY
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;