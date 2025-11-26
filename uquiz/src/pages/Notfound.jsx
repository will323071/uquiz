import { Link } from "react-router-dom";

const Notfound = () => {
  return (
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
  );
};

export default Notfound;
