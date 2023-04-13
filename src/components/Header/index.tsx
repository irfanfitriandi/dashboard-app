import Profile from "assets/user.png";

const Header = () => {
  return (
    <header className="flex justify-end items-center gap-3 py-3 px-12 text-white border-b border-[#4B5259]">
      <img src={Profile} height={32} width={32} alt="Profile" className="cursor-pointer" />
      <div className="cursor-pointer font-medium">Hello, Stephanie!</div>
    </header>
  );
};

export default Header;
