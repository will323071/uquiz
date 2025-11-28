import CustomButton from "../components/CustomButton";
import { useQuiz } from "../hooks/useQuiz";

const Quiz = () => {
  const {
    currentQuiz,
    currentId,
    selectedOption,
    handleOption,
    handleNextQuiz,
  } = useQuiz();

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
              checked={selectedOption === option}
              onChange={handleOption}
            />
            {option}
          </label>
        ))}
      </div>

      <CustomButton
        onClick={handleNextQuiz}
        className="w-full bg-blue-500 py-2 rounded-lg text-white hover:bg-gray-600 transition-colors"
      >
        다음
      </CustomButton>
    </div>
  );
};

export default Quiz;