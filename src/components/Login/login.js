// import { Link } from "react-router-dom";
import logo from '../../../src/assets/logo.png'
function Login() {
  return (
    <>
    
    <main className="relative flex justify-center items-center h-screen">
  <section className="">
    <div className=" flex">
      <div className="md:flex  grid w-full grid-cols-1 md:grid-cols-2 ">
        
          <div className="col-span-1 w-full md:col-span-2 md:col-start-2 flex flex-col mx-auto">
            <div className="bg-white  rounded-lg p-4">
              <div className="relative">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 absolute top-0 end-0 md:hidden" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand flex m-0" href="index.php">
                  <img src={logo} className="h-20" alt="main_logo" />
                  <span className="ms-1 font-semibold text-primary "><br></br> Clinical Placement</span>
                </a>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-xl text-primary">Sign In</h4>
                <p className="mb-2">Enter your Email-ID and password to sign in</p>
              </div>

              <div className="mt-4">
                <form role="form" method="post" action="login.php">
                  <div className="mb-4">
                    <input type="text" name="login_identifier" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" placeholder="Email-ID" aria-label="Username or Email" required />
                  </div>
                  <div className="mb-4">
                    <input type="password" name="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" placeholder="Password" aria-label="Password" required />
                  </div>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input className="form-checkbox border-gray-300" type="checkbox" id="rememberMe" name="rememberMe" />
                      <span className="ml-2">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">Sign in</button>
                  </div>
                </form>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm">
                  Don t have an account? 
                  <a href="javascript:;" className="text-primary font-semibold">Request Account</a>
                </p>
              </div>
            </div>
          </div>

         
        
      </div>
      <div className="hidden md:flex  grid w-full grid-cols-1 md:grid-cols-2 ">
      <div className=" text-center justify-center flex-col">
            <div className="bg-gradient-to-br from-primary to-primary-light h-full m-3 p-7 rounded-lg flex flex-col justify-center overflow-hidden">
              <h4 className="text-white font-semibold">Welcome to Discipline CONNECT (DC)</h4> <br></br>
              <p className="text-white">This system will foster a more disciplined <br></br>and harmonious learning environment, promoting the overall development and academic success of students.</p>
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
