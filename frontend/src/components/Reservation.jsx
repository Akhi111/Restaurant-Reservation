import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import img9 from "../assets/img/img9.png";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-wrap pt-12 pb-12 justify-center bg-[#D9EDBF]">
      <div className="w-full max-w-sm md:max-w-md mx-auto">
        <div>
          <div className="px-4 py-10">
            <img
              className="h-auto max-w-full md:max-w-xl rounded-2xl"
              src={img9}
              alt="Salad"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-2 w-full max-w-sm md:max-w-md mx-auto">
        <div className="bg-[#bbd49a] shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              MAKE A RESERVATION
            </h2>
            <p className="text-sm text-gray-600 mb-2 text-center">
              For Further Questions, Please Call
            </p>

            <form className="flex flex-wrap">
              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center w-full">
                <button
                  className=" bg-[#2b610e] text-white font-bold py-2 px-4 pb-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleReservation}
                >
                  RESERVE NOW
                  <span className="flex justify-center items-center rounded-full">
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
