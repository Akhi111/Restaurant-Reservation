import img1 from "../assets/img/img1.png";

const AboutUs = () => {
  return (
    <div className="border-b-2 border-b-[#2b610e] min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-[#D9EDBF]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-14">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight text-slate-950">
          ABOUT US
        </h1>
        <p>
          <span className="font-bold text-[#2b4e18] text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            The only thing we are serious about is food.
          </span>
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>

      <div className="relative">
        <div>
          <img
            src={img1}
            alt="img"
            className="h-auto w-full max-w-xl rounded-2xl shadow-xl dark:shadow-gray-800 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
