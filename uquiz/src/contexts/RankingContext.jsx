import { createContext, useEffect, useState } from "react";

export const RankingContext = createContext();

const RankingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ranking, setRanking] = useState([]);
  const [myResult, setMyResult] = useState({ nickname: "", score: 0 });

  useEffect(() => {
    const storedData = localStorage.getItem("ranking_info");
    if (storedData) {
      setRanking(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("ranking_info", JSON.stringify(ranking));
    }
  }, [ranking, isLoading]);

  const addRanking = (nickname, score) => {
    setMyResult({ nickname, score });

    setRanking((prev) => {
      const newList = [...prev, { nickname, score }];
      newList.sort((a, b) => b.score - a.score);
      return newList;
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-2.5 text-2xl">
        Loading
      </div>
    );
  }

  return (
    <RankingContext.Provider value={{ ranking, myResult, addRanking }}>
      {children}
    </RankingContext.Provider>
  );
};

export default RankingProvider;
