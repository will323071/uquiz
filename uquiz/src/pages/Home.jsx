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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div
        style={{
          width: "380px",
          backgroundColor: "white",
          padding: "40px 30px",
          borderRadius: "15px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "25px", fontWeight: "600" }}>UQuiz?(by 이찬영)</h1>

        <input
          type="text"
          placeholder="닉네임을 입력하세요.."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleStart}
          style={{
            width: "120px",
            padding: "12px 0",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;