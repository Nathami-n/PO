import { SideBar, Header } from "../components";

const Home = () => {
  return (

    <div>
      {/* sidenav */}
      <div>
        <SideBar />
      </div>
      {/* main content */}
      <div>
        <Header/>
      </div>
    </div>
  )
}

export default Home