
import Navbar from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/AudiologisteSidebar";
import Viewsingle from "../components/Screaning/updateborn";


const Viewsinglebon = () => {
  

    return (
      <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />

        <div className="relative md:pt-32 pb-32 pt-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6  border border-primary">

      <Viewsingle />
          </div>
          </div>
        
       
      </div>

</>
    );
}

export default Viewsinglebon;