import { createContext, useState, useEffect, useContext } from "react";
import { getCafes } from "../api/cafeApi";

const CafeContext = createContext();

export const useCafes = () => useContext(CafeContext);

export function CafeProvider({ children }) {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);

  const refetchCafes = async () => {
    try {
      const { data } = await getCafes();
      setCafes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetchCafes();
  }, []);

  return (
    <CafeContext.Provider value={{ cafes, loading, refetchCafes }}>
      {children}
    </CafeContext.Provider>
  );
}
