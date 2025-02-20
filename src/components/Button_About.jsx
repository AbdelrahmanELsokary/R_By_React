function Button({ text }) {
  return (
    <>
      <button className=" border-solid border-2 border-black w-24 text-center rounded-xl py-1.5 px-4 my-5 mx-1 last: hover:bg-[#212529] duration-500 hover:text-white hover:border-white">
        {text}
      </button>
    </>
  );
}
export default Button;
