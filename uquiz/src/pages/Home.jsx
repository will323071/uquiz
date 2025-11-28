import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    navigate(`/quiz/${nickname}`);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#f8f9fc]">
      <div className="w-[380px] bg-white p-[40px_30px] rounded-[15px] shadow-[0_5px_25px_rgba(0,0,0,0.1)] flex flex-col items-center">
        <h1 className="mb-[25px] font-semibold">UQuiz?(by 이찬영)</h1>

        <input
          type="text"
          placeholder="닉네임을 입력하세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full p-[12px_14px] rounded-[8px] border border-[#ddd] outline-none text-[15px] mb-[20px]"
        />

        <button
          onClick={handleStart}
          className="w-[120px] py-[12px] bg-blue-500 text-white rounded-[8px] text-[15px] cursor-pointer transition hover:bg-blue-600"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;
