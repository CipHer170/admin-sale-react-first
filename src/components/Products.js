import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productContext } from "../context/productContext";
import { Stack } from "@mui/material";

function Products() {
  const { product } = React.useContext(productContext);

  const [showMore, setShowMore] = React.useState(true);

  return (
    <Stack sx={{ display: "flex" }} className="card">
      {product
        ?.filter((item) => item.id)
        .slice(0, product.lenght)
        .map((productItem, index) => (
          <Card
            sx={{ maxWidth: 345 }}
            className="card__container"
            key={productItem.id}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={productItem.image}
              title={productItem.title}
            />
            <CardContent className="card__content">
              <Typography gutterBottom variant="h5" component="div">
                {productItem.title.slice(0, 19)}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {productItem.price}
              </Typography>
              {showMore && (
                <p className="btn-learnMore">{productItem.description}</p>
              )}
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button size="small" onClick={() => setShowMore(!showMore)}>
                Learn More
              </Button>
              <Button size="small">
                <AddShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        ))}
    </Stack>
  );
}

export default Products;
