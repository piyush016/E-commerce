import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Skeleton } from "@mui/material";

const Product = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <div style={{ width: "100%", height: "200px", position: "relative" }}>
          <Card.Img
            src={product.image}
            alt={product.name}
            onLoad={() => setImageLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              display: imageLoaded ? "block" : "none",
            }}
          />
          {!imageLoaded && (
            <Skeleton
              variant='rect'
              width='100%'
              height='100%'
              animation='wave'
              style={{ position: "absolute", top: "0", left: "0" }}
            />
          )}
        </div>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>&#8377; {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
