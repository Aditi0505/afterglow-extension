import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const QuoteContext = createContext(null);

const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/random?maxLength=100"
        );
        setQuote(response.data.content);
      } catch (e) {
        setQuote(null);
      }
    })();
  }, []);
  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

const useQuote = () => useContext(QuoteContext);

export { useQuote, QuoteProvider };
