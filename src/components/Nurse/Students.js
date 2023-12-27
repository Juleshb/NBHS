
import Navbar from "../Nav/nav";
import Sidebar from "../Sidebar/Sidebar";
import TabNavigation from "./topnav";
export default function Students() {
  return (
    

<>
      <Sidebar />
      <div className="relative md:ml-64 bg-secondary">
        <Navbar />

        <div className="relative md:pt-10 sm:pb-40 pt-20 pb-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <TabNavigation/>
    
         
        </div>
        
       
      </div>
    
    </>
      

      
  );
}
