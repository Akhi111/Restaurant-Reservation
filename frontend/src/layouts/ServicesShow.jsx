const ServicesShow = (props) => {
    return (
        <div className="w-full lg:w-1/4 bg-[#D9EDBF] p-3 rounded-lg">
          <div className="flex justify-center">
            <img className=" rounded-xl" src={props.img} alt="img1" />
          </div>
          <div className=" p-2 mt-5">
            <div className=" flex flex-row justify-center">
              <h3 className="font-semibold text-xl">{props.title}</h3>
            </div>
            <div className=" flex flex-row justify-center">
              <p className=" font-normal text-x text-center">{props.desc}</p>
            </div>
          </div>
        </div>
      );
    };

export default ServicesShow;
