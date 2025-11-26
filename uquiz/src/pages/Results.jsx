import { useContext } from "react";
import { RankingContext } from "../contexts/RankingContext";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { myResult, ranking } = useContext(RankingContext);
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <h2 className="text-2xl font-extrabold">📊 퀴즈 결과</h2>

      <div>
        <p className="text-lg">내 점수 : {myResult.score} / 10</p>
      </div>

      <table className="w-1/2 border border-gray-400 border-collapse rounded overflow-hidden mb-5">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 border-b border-gray-400">순위</th>
            <th className="py-2 border-b border-gray-400">ID</th>
            <th className="py-2 border-b border-gray-400">점수</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((item, idx) => (
            <tr key={idx} className="text-center">
              <td className="py-2 border-t border-gray-400">{idx + 1}</td>
              <td className="py-2 border-t border-gray-400">{item.nickname}</td>
              <td className="py-2 border-t border-gray-400">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CustomButton
        onClick={handleRestart}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
      >
        다시하기
      </CustomButton>
    </div>
  );
};

export default Results;
