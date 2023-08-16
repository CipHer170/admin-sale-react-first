import axios from "axios";
import { createContext, useState } from "react";

const ProductContext = createContext();

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

  function priceConverter(num) {
    if (num?.length > 3) {
      num = num?.replace(/[^0-9.]/g, "");
      if (num?.indexOf(".") !== -1) {
        num = num?.substring(0, num?.indexOf(".") + 3);
      }
      num = num?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return num;
  }
  // console.log(JSON.stringify(product), "hello");

  const value = {
    product,
    setProduct,
    getData,
    addCart,
    setAddCart,
    handleAddCart,
    priceConverter,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default Provider;

export { ProductContext };

export function dataFormatter(data = {}) {
  const objectToArray = Object.entries(data || {});
  const newData = objectToArray.map((item) => ({
    ...item[1],
    id: item[0],
  }));
  return newData;
}
