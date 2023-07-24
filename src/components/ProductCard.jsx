import React, { useContext, useEffect, useState, useNavigate } from "react";
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
import { productContext } from "../context/productContext";
import { Link } from "react-router-dom";
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
  const { product } = useContext(productContext);
  // const navigate = useNavigate();

  const open = () => {
    setCloseAll(!closeAll);

    // setTimeout(() => {
    //   setShowMore(!showMore);
    // }, 0);
    // navigate("/product-detail");
    // navigate("");
  };

  useEffect(() => {
    if (closeAll !== null) {
      setShowMore(false);
    }

    return () => {
      openDescription && clearTimeout(openDescription);
    };
  }, [closeAll]);

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
        <Button size="small" onClick={open}>
          <Link>More</Link>
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
