import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#D9EDBF] to-[#2b610e]">
      
        <div className="container flex flex-col justify-center items-center text-center">
          <img src="/sandwich.png" alt="success" className="mt-10" />
          <h1 className=" text-xl font-semibold text-[#2b4e18] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">Redirecting to Home in {countdown} seconds...</h1>
          <Link to={"/"} className="inline-block bg-[#2b610e] text-white font-bold py-2 px-4 rounded-full mt-4">
            Back to Home <HiOutlineArrowNarrowRight className="inline-block h-5 w-5 align-middle" />
          </Link>
        </div>
      
    </div>
  );
};

export default Success;
