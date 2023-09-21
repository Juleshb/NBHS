import Navbar from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Students from "../components/Metron/Students";
import { Route, Routes, Navigate } from 'react-router-dom';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />

        <div className="relative md:pt-32 pb-32 pt-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          
          <Routes>
          <Route path="/sutudent" exact ={<Students />} />
            {/* <Route path="/admin/maps" element={<Maps />} />*/}
            <Route path="*" element={<Navigate to="/adimin" />} />
          </Routes>
         
        </div>
        
       
      </div>
    </>
  );
}
