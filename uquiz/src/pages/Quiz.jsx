import { useContext, useState } from "react";
import data from "../data/questions.json";
import CustomButton from "../components/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import { RankingContext } from "../contexts/RankingContext";

const Quiz = () => {
  const [quiz, setQuiz] = useState(data);
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
    if (selectedOption === "") {
      alert("선택지를 선택해주세요.");
      return;
    }

    const isCorrect = selectedOption === answer;
    let newAnswerCount = answerCount;
    if (isCorrect) newAnswerCount += 1;

    if (currentId + 1 < quiz.length) {
      setCurrentId((prev) => prev + 1);
      setSelectedOption("");
      setAnswerCount(newAnswerCount);
    } else {
      addRanking(decodedNickname, newAnswerCount);
      navigate(`/results/${encodeURIComponent(decodedNickname)}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-[17px]">
        <span>{currentId + 1}. </span>
        {currentQuiz.question}
      </h2>
      <div className="flex flex-col gap-3">
        {currentQuiz.options.map((option, idx) => (
          <label
            className="rounded-[5px] bg-[rgba(220,220,222,0.84)] py-2 px-3 flex items-center gap-1.5"
            key={idx}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={option === selectedOption}
              onChange={handleOption}
            />
            {option}
          </label>
        ))}
      </div>
      <CustomButton
        onClick={handleNextQuiz}
        className={"bg-gray-400 mx-auto w-44 "}
      >
        다음
      </CustomButton>
    </div>
  );
};

export default Quiz;
