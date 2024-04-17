import img2 from "../assets/img/super_taste.svg";
import img3 from "../assets/img/quality_food.svg";
import img4 from "../assets/img/fast_delivery.svg";
import ServicesShow from "../layouts/ServicesShow";

const Services = () => {
  return (
    <div className="border-2 border-[#2b610e] min-h-24 flex flex-col justify-center lg:px-30 px-5 bg-[#D9EDBF]">
      <div className=" flex flex-wrap pb-6 pt-6 gap-8 justify-center">
        <ServicesShow img={img2} title="Quality Food" desc="Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur." />
        <ServicesShow img={img3} title="Super Taste" desc="Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur." />
        <ServicesShow img={img4} title="Fast Delivery" desc="Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur." />
      </div>
    </div>
  );
};

export default Services;
