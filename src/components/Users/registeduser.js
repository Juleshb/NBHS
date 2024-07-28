import StudetAction from "../../Dropdowns/studentDropdowns";
import { useState,  useEffect, } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import * as XLSX from 'xlsx';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleRowClick = (userId) => {
    console.log('Clicked user ID:', userId);
    navigate(`/users/view/${userId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hblab.rw/DataCollection/API/users/getall');
        const data = await response.json();

        if (response.ok) {
          setUsers(data.data || []);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const exportJson = () => {
    const jsonContent = JSON.stringify(users, null, 2);
    downloadFile(jsonContent, 'users.json', 'application/json');
  };

  const exportExcel = () => {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(users);
    XLSX.utils.book_append_sheet(workbook, sheet, 'Users');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const excelUrl = URL.createObjectURL(excelData);
    downloadFile(excelUrl, 'users.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  };

  const exportSeed = () => {
    const seedContent = `'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
${users.map(user => {
      return `      {
        role: "${user.role}",
        firstName: "${user.firstName}",
        lastName: "${user.lastName}",
        email: "${user.email}",
        pin: "${user.pin}",
        type: ${user.type ? `"${user.type}"` : null},
        profile: ${user.profile ? `"${user.profile}"` : null},
        HealthCentre: ${user.HealthCentre},
        updatedAt: "${user.updatedAt}",
        createdAt: "${user.createdAt}"
      },`;
    }).join('\n')}
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Revert the data
  }
};
`;
    downloadFile(seedContent, 'seed.js', 'text/javascript');
  };

  const downloadFile = (content, fileName, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };


    return (
      <>

<div className="text-3xl">
          
          <button className="p-2" onClick={exportJson}><Icon icon="bi:filetype-json" /></button>
          <button className="p-2" onClick={exportExcel}><Icon icon="vscode-icons:file-type-excel" /></button>
          <button className="p-2" onClick={exportSeed}><Icon icon="emojione:seedling" /></button>
        </div>
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
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Health Centre
          </th>
          <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="text-xs">
      {users.map((user) => (
  <tr key={user.id} className="hover:bg-gray-100" onClick={() => handleRowClick(user.id)}>
    <td className="px-6 py-4 whitespace-no-wrap">{user.firstName}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.lastName}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.role}</td>
    <td className="px-6 py-4 whitespace-no-wrap">{user.HealthCentre}</td>
    <td className="px-6 py-4 whitespace-no-wrap">
      <StudetAction userId={user.id} />
    </td>
  </tr>
))}

      </tbody>
    </table>
      </div>
    </>
    );
}
export default UserTable;