import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { DataContext } from "../context/productContext";
import { Stack } from "@mui/material";

function Products() {
  const { product, setProduct, getData } = React.useContext(DataContext);
  React.useEffect(() => {
    getData();
  }, []);

  // добавить нужно количество продуктов !!!!
  return (
    <Stack sx={{ display: "flex" }}>
      {product?.map(({ id, title, description, price }) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button size="small">Learn More</Button>
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
