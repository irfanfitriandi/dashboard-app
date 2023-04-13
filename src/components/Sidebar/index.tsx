import Logo from "assets/SidebarIcon/logo.svg";
import Home from "assets/SidebarIcon/home.svg";
import Reports from "assets/SidebarIcon/piechart.svg";
import Notif from "assets/SidebarIcon/notif.svg";
import Settings from "assets/SidebarIcon/setting.svg";
import Logout from "assets/SidebarIcon/logout.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-nav basis-1/6 min-h-screen p-5 gap-8">
      <a href="/">
        <img src={Logo} alt="logo" height={35} width={132} />
      </a>
      <nav className="flex flex-col gap-2 pt-8 text-[#6C747D]">
        <a href="#" className="flex px-5 py-3 gap-3 bg-hov rounded-lg">
          <img src={Home} alt="home" />
          <div>Home</div>
        </a>
        <a href="#" className="flex px-5 py-3 gap-3 hover:bg-hov rounded-lg ease-in duration-300">
          <img src={Reports} alt="home" />
          <div>Reports</div>
        </a>
        <a
          href="#"
          className="flex items-center px-5 py-3 gap-3 hover:bg-hov rounded-lg ease-in duration-300"
        >
          <img src={Notif} alt="home" />
          <div>Notification</div>
          <div className="flex justify-end w-full">
            <span className="bg-[#98FFE0] rounded-[4px] text-nav w-[18px] h-[18px] text-xs flex justify-center items-center">
              1
            </span>
          </div>
        </a>
        <a href="#" className="flex px-5 py-3 gap-3 hover:bg-hov rounded-lg ease-in duration-300">
          <img src={Settings} alt="home" />
          <div>Settings</div>
        </a>
        <a href="#" className="flex px-5 py-3 gap-3 hover:bg-hov rounded-lg ease-in duration-300">
          <img src={Logout} alt="home" />
          <div>Log out</div>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
