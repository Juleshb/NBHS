
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Admin from './adimin';
import Student from './student';
import Students from './components/Metron/Students';
import LandingPage from './landing';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage/>} />

          {/* Sutudents */}

          <Route path="/studentpage" element={<Student/>} />

          {/* Adimins */}

          <Route path="/adimin" element={<Admin/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/adimin/sutudent" element ={<Students />} />
          <Route path="*" element={<Navigate to="/landing" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
