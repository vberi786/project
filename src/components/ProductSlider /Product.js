import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = props => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          
          <Card.Text>
            Tyes Of Website we are SpecIALIZED INN.
          </Card.Text>
          <div className="product-actions">
            
            <Button variant="secondary">DEMO</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
