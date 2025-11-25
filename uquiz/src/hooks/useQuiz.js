import { useState } from "react";
import { useRank } from "../contexts/RankingContext";
import { useNavigate, useParams } from "react-router-dom";

import QUESTIONS from "../assets/data/questions.json";
import { RouteName } from "../router";

export const useQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { updateRank } = useRank();
  const [corrects, setCorrects] = useState(0);
  const [selected, setSelected] = useState(-1);
  const params = useParams();
  const navigate = useNavigate();
  const handleQuestionIndex = () => {
    if (selected < 0) {
      alert("보기를 선택해주세요!");
      return;
    }
    if (selected === QUESTIONS[questionIndex].answer) {
      setCorrects((prev) => prev + 1);
    }
    setSelected(-1);
    if (questionIndex === QUESTIONS.length - 1) {
      if (params?.nickname) {
        const { nickname } = params;

        if (selected === QUESTIONS[questionIndex].answer) {
          updateRank({
            id: nickname,
            score: corrects + 1,
            total: QUESTIONS.length,
          });
        } else {
          updateRank({
            id: nickname,
            score: corrects,
            total: QUESTIONS.length,
          });
        }
        navigate(RouteName.results(nickname));
      }
    } else {
      setQuestionIndex((prev) => prev + 1);
    }
  };
  const handleOptionSelected = (e) => {
    if (Number(e.target.value) >= 0 && Number(e.target.value) < 4) {
      setSelected(Number(e.target.value));
    }
  };

  return { questionIndex, selected, handleQuestionIndex, handleOptionSelected };
};
