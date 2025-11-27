import { Link } from "react-router-dom";

const NotFound = () => {
  return (
     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6 text-center">
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        페이지를 찾을 수 없습니다 😓
      </h2>
    <div className="flex flex-col items-center gap-3">
      <h1 className="mt-2 text-xl font-semibold">
        존재하지 않는 페이지입니다.
      </h1>

      <Link
        to="/"
        className="text-xl font-extrabold text-black no-underline hover:text-blue-600 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  </div>
  );
};

export default NotFound;
