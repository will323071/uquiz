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
    <div className="max-w-[400px] mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-center">UQuiz?</h1>

      <h2 className="text-lg text-center">
        <span>{currentId + 1}. </span>
        {currentQuiz.question}
      </h2>

      <div className="flex flex-col gap-3">
        {currentQuiz.options.map((option, idx) => (
          <label
            key={idx}
            className="rounded-md bg-gray-200 px-3 py-2 flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={option === selectedOption}
              onChange={handleOption}
              className="mr-1"
            />
            {option}
          </label>
        ))}
      </div>

   <CustomButton
      onClick={handleNextQuiz}
      className="w-full bg-blue-500 py-2 rounded-lg text-white hover:bg-gray-600 transition-colors">
       다음
    </CustomButton>
    </div>
  );
};

export default Quiz;
