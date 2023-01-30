import {Link} from "react-router-dom"
const ErrorPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#eff]">
      <div className="flex flex-col justify-center items-center gap-y-6 bg-white z-20 shadow-md p-10 rounded-xl">
        <h1 className="text-red-600 text-7xl font-bold">404</h1>
        <p className="text-lg font-bold">Oops! Something wrong…</p>
        <p className="text-lg font-semibold text-center">
          The page you are looking for might have been removed, <br/> had its name
          changed, <br/> or is temporarily unavailable.
        </p>
        <Link to="/" replace={true} className="bg-red-600 text-white px-4 py-2 rounded-lg mt-8">
            Back to homepage
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
