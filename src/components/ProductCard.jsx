import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import no_image from "../assets/no_image.jpg";
import "./ProductCard.scss";
import { ProductContext } from "../context/productContext";
export default function ProductCard({ title, image, productItem, id, price }) {
  const [addToCartClick, setAddToCartClick] = useState(false);
  const { priceConverter } = useContext(ProductContext);

  const handleAddToCartClick = (id) => {
    if (id === productItem.id) {
      setAddToCartClick(!addToCartClick);
    }
  };
  const imageNotNull = image ? image : no_image;

  return (
    <Link to={`/product-detail/${id}`} className="card">
      <div className="card__image">
        <img src={imageNotNull} alt="product_image" />
      </div>
      <div className="card__description">
        <h2 className="card__title">{title}</h2>
        <div className="card__action">
          <p>{priceConverter(price)} so'm</p>
          <Button onClick={handleAddToCartClick}>
            <AddShoppingCartIcon />{" "}
          </Button>
        </div>
      </div>
    </Link>
  );
}
