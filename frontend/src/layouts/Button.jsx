
const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-2 text-white border-white bg-[#000000] hover:text-[#992323] transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;