import axios from "axios";
import { createContext, useState } from "react";

const DataContext = createContext();

function Provider({ children }) {
  const [product, setProduct] = useState();

  const getData = async () => {
    const res = await axios.get(
      `https://dashboard-first-default-rtdb.firebaseio.com/dashboard.json`
    );
    setProduct(dataFormatter(res.data));
  };

  const value = {
    product,
    setProduct,
    getData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default Provider;
export { DataContext };
export function dataFormatter(data = {}) {
  const objectToArray = Object.entries(data || {});
  const newData = objectToArray.map((item) => ({
    ...item[1],
    id: item[0],
  }));
  return newData;
}
