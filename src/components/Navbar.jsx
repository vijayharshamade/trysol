import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header className="h-16 w-full bg-[#ffffff] shadow-lg shadow-black/50 rounded-[24px]">
        <nav className="flex flex-row justify-between items-center w-full h-full pl-5 pr-5">
          <img
            src={logo}
            className="h-[25px] w-[50px] md:h-[30px]  md:w-[80px] cursor-pointer"
          />
          <button className="pl-3 pr-3 pt-0.5 pb-0.5  text-white bg-[#5e70ca] rounded-xl">
            Login
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
