
// const Footer = () => {
//   return (
//     <footer className="bg-primary py-4">
//       <div className="container mx-auto text-center text-white">
//         <p>&copy; 2023 <a href="https://jules-hb-250.netlify.app/" className="underline">by HB-Lab</a> All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-primary sm:text-sm text-ceneter px-5 sm:px-0 lg:px-8">
      
        <div className="flex justify-around p-10 ">
          <div className="text-white flex flex-col space-y-4 items-center sm:hidden xs:hidden">
            <div className="">
            <Icon icon="el:map-marker" width="36" />
            </div>
           <div className=" flex flex-col items-center space-y-4 ">
           <h3>Kigali, Rwanda</h3>
            <h3>KN 20 Ave</h3>
           </div>
            
          </div>
          <div className="text-white flex flex-col space-y-4 items-center xs:text-sm">
            <div className="">
            <h3>Follow Us to Get Updates !</h3>
            </div>
          
            <div className=" flex mt-3 space-x-4 space-y-1 items-center">
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="line-md:facebook" width="36" /></Link>
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="line-md:twitter-x-alt" width="36" /></Link>
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="line-md:linkedin" width="36" /></Link>
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="line-md:github-loop" width="36" /></Link>
          
            </div>
             

          </div>
          <div className="text-white flex flex-col space-y-4 items-center sm:hidden xs:hidden">
            <h3>Terms of Services</h3>
            <h3>Privacy Policy</h3>
            <h3>FAQ</h3>
          </div>
        </div>

        <div className='bg-primary'> 

          <h2 className="text-center text-white text-md pb-4 sm:text-sm"><span>&copy; All Rights Reserved by <a href="https://jules-hb-250.netlify.app/" className="underline"> HB-Lab</a> 2024.</span> </h2> 

        </div>
      </footer>
    </div>
  )
}
export default Footer;