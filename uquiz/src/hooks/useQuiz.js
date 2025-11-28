import { useState } from "react";
import data from "../data/questions.json";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { RankingContext } from "../contexts/RankingContext";

export const useQuiz = () => {
  const [quiz] = useState(data);
  const [currentId, setCurrentId] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answerCount, setAnswerCount] = useState(0);

  const { nickname } = useParams();
  const decodedNickname = decodeURIComponent(nickname);
  const navigate = useNavigate();
  const { addRanking } = useContext(RankingContext);

  const currentQuiz = quiz[currentId];
  const answer = currentQuiz.options[currentQuiz.answer];

  const handleOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuiz = () => {
    if (!selectedOption) {
      alert("선택지를 선택해주세요.");
      return;
    }

    const isCorrect = selectedOption === answer;
    const newCount = isCorrect ? answerCount + 1 : answerCount;

    if (currentId + 1 < quiz.length) {
      setCurrentId((prev) => prev + 1);
      setAnswerCount(newCount);
      setSelectedOption("");
    } else {
      addRanking(decodedNickname, newCount);
      navigate(`/results/${encodeURIComponent(decodedNickname)}`);
    }
  };

  return {
    currentQuiz,
    currentId,
    selectedOption,
    handleOption,
    handleNextQuiz,
  };
};