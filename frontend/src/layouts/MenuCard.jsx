const MenuCard = (props) => {
  return (
    <div className=" w-full lg:w-1/4 bg-[#bbd49a] p-3 rounded-lg">
      <div>
        <img className=" rounded-xl" src={props.img} alt="img1" />
      </div>
      <div className=" p-2 mt-5">
        <div className=" flex flex-row justify-center">
          <h3 className="font-semibold text-xl">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
