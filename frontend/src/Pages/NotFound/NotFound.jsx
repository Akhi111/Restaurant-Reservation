import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#D9EDBF] to-[#2b610e]">
      <div className="container flex flex-col justify-center items-center text-center">
        <img src="/notFound.svg" alt="notFound" className="mt-10" />
        <h1 className=" text-xl font-semibold text-[#2b4e18] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">
          LOOKS LIKE YOU'RE LOST
        </h1>
        <p>We can't seem to find you the page you're looking for</p>
        <Link
          to={"/"}
          className="inline-block bg-[#2b610e] text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Back to Home{" "}
          <span>
            <HiOutlineArrowNarrowRight className="inline-block h-5 w-5 align-middle" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
