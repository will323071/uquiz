import { useContext, createContext, useState, useEffect } from "react";

export const RankingContext = createContext();

export const useRank = () => useContext(RankingContext); 

const RankingProvider = ({ children }) => {
  const [ranking, setRanking] = useState([]);
  const [myResult, setMyResult] = useState({ nickname: "", score: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("ranking_info");
    if (storedData) setRanking(JSON.parse(storedData));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) localStorage.setItem("ranking_info", JSON.stringify(ranking));
  }, [ranking, isLoading]);

  const addRanking = (nickname, score) => {
    setMyResult({ nickname, score });
    setRanking((prev) => {
      const newList = [...prev, { nickname, score }];
      newList.sort((a, b) => b.score - a.score);
      return newList;
    });
  };

  const resetRanking = () => {
  setRanking([]);
  setMyResult({ nickname: "", score: 0 });
  localStorage.removeItem("ranking_info");
};


  if (isLoading) return <div className="w-full h-screen flex items-center justify-center text-lg font-semibold rounded-lg">Loading...</div>;

  return (
    <RankingContext.Provider value={{ ranking, myResult, addRanking, resetRanking }}>
      {children}
    </RankingContext.Provider>
  );
};

export default RankingProvider;
