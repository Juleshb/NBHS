import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png';

function Login() {
  // Define state variables to store form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a request body with the user's email and password
    const requestBody = {
      email,
      password,
    };

    try {
      // Make a POST request to the API
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Check if the response status is OK (200)
      if (response.ok) {
        // API call was successful, you can handle the success scenario here
        // For example, you can redirect the user to another page or set a success message
        console.log('Login successful');
      } else {
        // Handle error cases, e.g., show an error message to the user
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred', error);
    }
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
                    <Link className="navbar-brand flex m-0" to="/studentpage">
                      <img src={logo} className="h-20" alt="main_logo" />
                      <span className="ms-1 font-semibold text-primary ">
                        <br></br> Clinical Placement
                      </span>
                    </Link>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-xl text-primary">Sign In</h4>
                    <p className="mb-2">Enter your Email-ID and password to sign in</p>
                  </div>

                  <div className="mt-4">
                    <form role="form" onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="login_identifier"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                          placeholder="Email-ID"
                          aria-label="Username or Email"
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
                          placeholder="Password"
                          aria-label="Password"
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
                      <a href="javascript:;" className="text-primary font-semibold">
                        Request Account
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex  grid w-full grid-cols-1 md:grid-cols-2 ">
              <div className=" text-center justify-center flex-col">
                <div className="bg-gradient-to-br from-primary to-primary-light h-full m-3 p-7 rounded-lg flex flex-col justify-center overflow-hidden">
                  <h4 className="text-white font-semibold">Welcome to Discipline CONNECT (DC)</h4>{' '}
                  <br></br>
                  <p className="text-white">
                    This system will foster a more disciplined <br></br>and harmonious learning
                    environment, promoting the overall development and academic success of
                    students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
