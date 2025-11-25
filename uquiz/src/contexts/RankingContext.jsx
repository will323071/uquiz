import { createContext, useEffect, useState } from "react";

export const RankingContext = createContext();

const RankingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("ranking_info");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    setResult(parsedData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("ranking_info", JSON.stringify(result));
    }
  }, [result]);

  const addRanking = (nickname, score) => {
    setResult((prev) => {
      const newList = [...prev, { nickname, score }];

      newList.sort((a, b) => b.score - a.score);

      return newList;
    });
  };

  if (isLoading) {
    return <div className="flex justify-center mt-2.5 text-3xl">Loading</div>;
  }

  return (
    <RankingContext.Provider value={{ result, addRanking }}>{children}</RankingContext.Provider>
  );
};

export default RankingProvider;