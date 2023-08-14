import React, { useContext, useEffect, useState, useNavigate } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Content from "./Content";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
export default function ProductCard({
  title,
  description,
  price,
  amount,
  image,
  closeAll,
  setCloseAll,
  productItem,
  id,
}) {
  const [showMore, setShowMore] = React.useState(false);
  const openDescription = null;
  const [addClick, setAddClick] = useState(false);
  const { product } = useContext(ProductContext);
  // const navigate = useNavigate();

  const handleAddClick = (id) => {
    if (id === productItem.id) {
      setAddClick(!addClick);
    }
  };

  return (
    <Card className="card__container" id={id}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent className="card__content">
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0, 19)}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button size="small" key={id}>
          <Link to={`./product-detail/${id}`}>More</Link>
        </Button>

        {addClick ? (
          <Content productItem={productItem} id={id} />
        ) : (
          <Button size="small" onClick={() => handleAddClick(id)}>
            <AddShoppingCartIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
