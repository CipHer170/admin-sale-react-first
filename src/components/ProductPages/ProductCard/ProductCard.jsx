import { useContext, useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import no_image from "../../../assets/no_image.jpg";
import "../ProductCard/ProductCard.scss";
import { ProductContext } from "../../../context/productContext";
export default function ProductCard({ title, image, productItem, id, price }) {
  const [addToCartClick, setAddToCartClick] = useState(false);
  const { priceConverter, currency } = useContext(ProductContext);

  const handleAddToCartClick = (id) => {
    if (id === productItem.id) {
      setAddToCartClick(!addToCartClick);
      console.log("hello");
    }
  };
  const imageNotNull = image ? image : no_image;

  return (
    <div className="card">
      <Link to={`/product-detail/${id}`} className="card__container">
        <div className="card__image">
          <img src={imageNotNull} alt="product_image" />
        </div>
        <div className="card__description">
          <div className="card__title">{title}</div>
          <div className="card__action">{priceConverter(price) + currency}</div>
        </div>
      </Link>
      <div className="btn">
        <Button onClick={handleAddToCartClick} className="btn__cart">
          <AddShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
}
