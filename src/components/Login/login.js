import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../../../src/assets/logo.png'; // Import your logo image path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [SuccessMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulating your login logic with API call
    const loginData = {
      email: email,
      pin: password
    };

    try {
      // Assuming a fetch call to your login API
      const response = await fetch('http://localhost:4600/DataCollection/API/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        const role = data.users.role; // Extract role from API response
        const authToken = data.token;
        const lastName = data.email;
        
        localStorage.setItem('authToken', authToken);

        localStorage.setItem('role', role);
        localStorage.setItem('lastName', lastName);

        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setSuccessMessage(data.message || 'You have logedin!');

        if (role === 'admin') {
          navigate('/adimin'); // Use navigate instead of history.push for redirection
        } else if (role === 'nurse') {
          navigate('/nurses'); // Use navigate instead of history.push for redirection
        }else if(role === 'ideologist'){
          navigate('/audiologiste')
        }
      }
      else {
        // Handle error response from API
        console.error('Failed to login:', response.statusText);
        setShowFailureMessage(true);
        setShowSuccessMessage(false);
        setErrorMessage(data.message || 'Failed to Login');
      }
    } catch (error) {
      console.error('Error:', error);
      setShowFailureMessage(true);
        setShowSuccessMessage(false);
        setErrorMessage('Form submission error:', error);
    }
  };
  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const closeFailureMessage = () => {
    setShowFailureMessage(false);
  };
  return (
    <>
      <main className="relative flex justify-center items-center h-screen">
        <section className="">
          <div className=" flex">
            <div className="md:flex  grid w-full grid-cols-1 md:grid-cols-2 ">
              <div className="col-span-1 w-full md:col-span-2 md:col-start-2 flex flex-col mx-auto">
                <div className="bg-white  rounded-lg p-4">
                  <div className="relative">
                    <i
                      className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 absolute top-0 end-0 md:hidden"
                      aria-hidden="true"
                      id="iconSidenav"
                    ></i>
                    <Link className="navbar-brand flex m-0" to="/landing">
                      <img src={logo} className="h-14 w-21"  alt="main_logo" />
                      
                    </Link>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-xl text-primary">Sign In</h4>
                    <p className="mb-2">Enter your Username and Pin </p>
                  </div>
     {/* Success message */}
     {showSuccessMessage && (
       <div className="border-dotted px-4 py-3 border-2 border-sky-500 text-sm text-primary bg-green-100 text-center flex justify-between" >
          <p className='items-center flex'><i className='mr-2'><Icon icon="dashicons:saved" /></i>{SuccessMessage}</p>
          <button onClick={closeSuccessMessage}><Icon icon="bytesize:close" /></button>
        </div>
      )}

      {/* Failure message */}
      {showFailureMessage && (
        <div className="border-dotted px-4 py-3 border-2 border-red-500 text-sm text-red-500 text-center flex justify-between" >
          <p className='items-center flex'><i className='mr-2'><Icon icon="bx:error-alt" /></i>{errorMessage}</p>
          <button onClick={closeFailureMessage}><Icon icon="bytesize:close" /></button>
        </div>
      )}
                  <div className="mt-4">
                  <form role="form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          name="login_identifier"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          placeholder="Username or Email"
          aria-label="Username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          placeholder="PIN"
          aria-label="PIN"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            className="form-checkbox border-gray-300"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
          />
          <span className="ml-2">Remember me</span>
        </label>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          Sign in
        </button>
      </div>
    </form>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm">
                      Don&apos;t have an account?{' '}
                      <Link to="/register" className="text-primary font-semibold">
                        Create Account
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex  grid w-full grid-cols-1 md:grid-cols-2 ">
              <div className=" text-center justify-center flex-col">
                <div className="bg-gradient-to-br from-primary to-primary-light h-full m-3 p-7 rounded-lg flex flex-col justify-center overflow-hidden">
                  <h4 className="text-white font-semibold">Welcome to Newborn Hearing Loss and Genetic Screening in Rwanda (NHSR)</h4>{' '}
                  <br></br>
                  <p className="text-white">
                  The NBHS Research project in Rwanda is dedicated <br></br>
                   to advancing newborn hearing screening by implementing <br></br>
                   a robust model for the early detection of hearing <br></br>
                   impairments in newborns. Concurrently, the project <br></br>
                   aims to delve into genetic assessments to identify <br></br>
                   genetic patterns associated with newborn hearing loss. <br></br>
                   This collaborative effort seeks to ensure timely <br></br>
                   interventions and support for affected infants in Rwanda.<br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
 );
};

export default Login;
