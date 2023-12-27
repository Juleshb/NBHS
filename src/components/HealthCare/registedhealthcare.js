import StudetAction from "../../Dropdowns/studentDropdowns";
import { Icon } from '@iconify/react';
export default function StudentsListe() {
    return (
      <>
      <form className="flex flex-row flex-wrap items-center">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-600 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <Icon icon="line-md:search" />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className=" mb-2 px-3 py-3 border border-gray-300 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
     <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-sky-100">
          <tr>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            ID No
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Name
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Provience
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            District
            </th>
            <th className="px-6 py-3   text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
             Action
            </th>
          </tr>
        </thead>
        <tbody className=" text-xs">
          {/* Add your table rows here */}
          <tr className="hover:bg-gray-100 ">
            <td className="px-6 py-4 whitespace-no-wrap ">0020</td>
            <td className="px-6 py-4 whitespace-no-wrap ">KIBIRIZI DH</td>
            <td className="px-6 py-4 whitespace-no-wrap ">Western</td>
            <td className="px-6 py-4 whitespace-no-wrap ">RUTSIRO</td>
            <td className="px-6 py-4 whitespace-no-wrap "><StudetAction/></td>
          </tr>
          <tr className="hover:bg-gray-100 ">
            <td className="px-6 py-4 whitespace-no-wrap ">0020</td>
            <td className="px-6 py-4 whitespace-no-wrap ">KIBIRIZI DH</td>
            <td className="px-6 py-4 whitespace-no-wrap ">Western</td>
            <td className="px-6 py-4 whitespace-no-wrap ">RUTSIRO</td>
            <td className="px-6 py-4 whitespace-no-wrap "><StudetAction/></td>
          </tr>
       
          {/* Add more rows as needed */}
        </tbody>
      </table>
      </div>
    </>
    );
}