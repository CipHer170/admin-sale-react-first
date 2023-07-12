import React, { useEffect, useState } from "react";
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

export default function ProductCard({
  title,
  description,
  price,
  amount,
  image,
  closeAll,
  setCloseAll,
}) {
  const [showMore, setShowMore] = React.useState(false);
  const openDescription = null;
  const [addClick, setAddClick] = useState(false);

  const open = () => {
    setCloseAll(!closeAll);

    setTimeout(() => {
      setShowMore(!showMore);
    }, 0);
  };

  useEffect(() => {
    if (closeAll !== null) {
      setShowMore(false);
    }

    return () => {
      openDescription && clearTimeout(openDescription);
    };
  }, [closeAll]);

  const handleAddClick = () => {
    setAddClick(!addClick);
  };

  return (
    <Card className="card__container">
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent className="card__content">
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0, 19)}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        {showMore && <p className="btn-learnMore">{description}</p>}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button size="small" onClick={open}>
          Learn More
        </Button>
        {addClick ? (
          <Content handleAddClick={handleAddClick} />
        ) : (
          <Button size="small" onClick={() => handleAddClick()}>
            <AddShoppingCartIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
