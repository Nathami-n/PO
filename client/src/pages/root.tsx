import { SideBar, Header } from "../components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex bg-bg min-h-screen w-full">
      {/* sidenav */}
      <div className="flex-[0.5] sticky top-0 h-full">
      <SideBar />
      </div>
      {/* main content */}
      <div className=" flex-[2.5]">
        <Header/>
        <div className="">
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Home