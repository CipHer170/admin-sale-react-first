import { Button } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../context/productContext";

function Content() {
  const { addCart, setAddCart, amount } = useContext(productContext);

  const handleDecrease = () => {
    if (addCart !== 1) {
      setAddCart(addCart - 1);
    }
  };
  // do not increase
  const handleIncrease = () => {
    if (addCart <= amount) {
      setAddCart(addCart + 1);
    }
  };

  return (
    <div className="btn-addcart">
      <Button onClick={handleIncrease}>+</Button>
      <h3>{addCart}</h3>
      <Button onClick={handleDecrease}>-</Button>
    </div>
  );
}

export default Content;
