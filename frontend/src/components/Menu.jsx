import MenuCard from "../layouts/MenuCard";
import img2 from "../assets/img/img2.png"
import img3 from "../assets/img/img3.png"
import img4 from "../assets/img/img4.png"
import img5 from "../assets/img/img5.png"
import img6 from "../assets/img/img6.png"
import img8 from "../assets/img/img8.png"

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#D9EDBF]">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Popular Dishes
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img8} title="Chicken Tandoori" />
        <MenuCard img={img2} title="Chicken Chilli" />
        <MenuCard img={img3} title="Chicken Kebabes" />
        <MenuCard img={img4} title="Chicken Lollypops" />
        <MenuCard img={img5} title="Chicken Wings" />
        <MenuCard img={img6} title="Chicken Nougets" />
      </div>
    </div>
  );
};

export default Menu;
