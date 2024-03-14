
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Admin from './adimin';
import Student from './student';
import Students from './components/Nurse/Students';
import LandingPage from './landing';
import Newapplication from './student/newapplication';
import Healthcare from './adimin/healthcare'
import Nurse from './Nurse';
import NurseScreaning from './Nurse/screaning'
import NurseViewsinglebon from './Nurse/uppdateborn';
import AdminScreaning from './adimin/screaning'
import User from './adimin/user'
import Audiologiste from './Audiologiste'
import Audioscreaning from './Audiologiste/screaning';
import Oaeresult from './Audiologiste/oaeresult';
import Viewsingle from './Audiologiste/uppdateborn';
import ABRScale from './Audiologiste/oaeresultupdate';
import Getbrscale from './Audiologiste/aebrscaleresult';
import ABRScaleupudate from './Audiologiste/abrresultupdate';
import Register from './components/Login/UserRegistForm'
import Viewuseradmin from './adimin/viewuser';
import Viewsinglebon from './adimin/uppdateborn';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Sutudents */}

          <Route path="/studentpage" element={<Student/>} />
          <Route path="/student/application" element={<Newapplication/>} />

          {/*Nurse*/}

          <Route path="/nurses" element={<Nurse/>} />
          <Route path="/nurse/screaning" element={<NurseScreaning/>} />
          <Route path="/nurses/view/:userId" element ={<NurseViewsinglebon />} />

          {/*Audiologiste*/}

          <Route path="/audiologiste" element={<Audiologiste/>} />
          <Route path="/audiologist/screaning" element={<Audioscreaning/>} />
          <Route path="/oaeresult" element={<Oaeresult/>} />
          <Route path="/abrscale" element={<Getbrscale/>} />
          <Route path="/audiologiste/view/:userId" element ={<Viewsingle />} />
          <Route path="/audiologiste/abrscaleupdate/:userId" element ={<ABRScaleupudate />} />
          <Route path="/audiologiste/abrscale/:userId" element ={<ABRScale />} />

          {/* Adimins */}

          <Route path="/adimin" element={<Admin/>} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/admin/screaning" element={<AdminScreaning />} />
          <Route path="/adimin/sutudent" element ={<Students />} />
          <Route path="/users" element ={<User />} />
          <Route path="/users/view/:userId" element ={<Viewuseradmin />} />
          <Route path="/born/view/:userId" element ={<Viewsinglebon />} />
          
          <Route path="*" element={<Navigate to="/landing" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
