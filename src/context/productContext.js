import axios from "axios";
import { createContext, useState } from "react";

const productContext = createContext();

function Provider({ children }) {
  const [product, setProduct] = useState();
  const [addCart, setAddCart] = useState([]);

  const handleAddCart = (id) => {
    return addCart.find((item) => item.id === id)?.amount || 0;
  };

  const getData = async () => {
    const res = await axios.get(
      `https://shop-5138f-default-rtdb.firebaseio.com/dashboard.json`
    );
    setProduct(dataFormatter(res.data));
  };

  const value = {
    product,
    setProduct,
    getData,
    addCart,
    setAddCart,
    handleAddCart,
    // getItemQuantity,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default Provider;

export { productContext };
export function dataFormatter(data = {}) {
  const objectToArray = Object.entries(data || {});
  const newData = objectToArray.map((item) => ({
    ...item[1],
    id: item[0],
  }));
  return newData;
}
