import { SideBar, Header } from "../components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex bg-bg min-h-screen w-full">
      {/* sidenav */}
        <SideBar />
      {/* main content */}
      <div className=" flex-[2.5]">
        <Header/>
        <div>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Home