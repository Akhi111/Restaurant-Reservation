import img from "../assets/img/home.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#D9EDBF] to-[#2b610e]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight text-slate-950">
          BayLeaf: Where Every Bite Blossoms with Flavor
        </h1>
        <p>
          At Bayleaf, we celebrate the diversity of culinary experiences.
          Indulge in our sumptuous vegetarian delights or savor the richness of
          our non-vegetarian specialties.
        </p>
      </div>

      <div className="relative">
        <div>
          <img
            src={img}
            alt="img"
            className="h-auto w-full max-w-xl rounded-2xl shadow-xl dark:shadow-gray-800 backdrop-blur-sm bg-[#D9EDBF]/10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
