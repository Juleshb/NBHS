import Navbar from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/Sidebar";
import UserView from "../components/Users/userdetail";


export default function viewuseradmin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />

        <div className="relative md:pt-32 pb-32 pt-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full m-2">
          
         <UserView/>
         
        </div>
        
       
      </div>
    </>
  );
}