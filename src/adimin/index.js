import Navbar from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/Sidebar";
import NewbornsChart from "../components/newbornchat";

import { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { Icon } from "@iconify/react";



export default function Admin() {

  const [borns, setBorns] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get('https://nbhsbackend.onrender.com/DataCollection/API/newBorns/getAllborns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization token if required
          'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
        },
      });
      setBorns(response.data.data);
      console.log(response.data.data); // Log fetched data
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const exportToJSON = () => {
    console.log(borns); // Log borns state before exporting
    const json = JSON.stringify(borns);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'borns.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const exportToExcel = () => {
    console.log(borns); // Log borns state before exporting
    const worksheet = XLSX.utils.json_to_sheet(borns);
    console.log(worksheet); // Log worksheet data
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'borns.xlsx';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateSeedFile = () => {
    const seedContent = `'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('NewBorns', [
${borns.map(born => {
      return `      {
        id: ${born.id},
        motherName: "${born.motherName}",
        fatherName: "${born.fatherName}",
        maritalStatus: "${born.maritalStatus}",
        phoneContact: "${born.phoneContact}",
        province: "${born.province}",
        district: "${born.district}",
        HealthCentre: ${born.HealthCentre},
        recordedBy: ${born.recordedBy},
        dateOfBirth: "${born.dateOfBirth}",
        ageOfNewborn: ${born.ageOfNewborn},
        sex: "${born.sex}",
        modeOfDelivery: "${born.modeOfDelivery}",
        APGARSCOREAtBirth: ${born.APGARSCOREAtBirth},
        weightAtBirth: ${born.weightAtBirth},
        neonatalInfectionRisk: "${born.neonatalInfectionRisk}",
        maternalSevereDisease: "${born.maternalSevereDisease}",
        historyOfMaternalAlcoholUseAndSmoking: "${born.historyOfMaternalAlcoholUseAndSmoking}",
        maternalExplosureToOtotoxicDrugs: "${born.maternalExplosureToOtotoxicDrugs}",
        newbornPositionInTheFamily: "${born.newbornPositionInTheFamily}",
        presenceOfEarDysmorphism: "${born.presenceOfEarDysmorphism}",
        historyOfHearingLossAmongFamilyMembers: "${born.historyOfHearingLossAmongFamilyMembers}",
        OAEResult: "${born.OAEResult}",
        ABRScale: ${born.ABRScale ? `"${born.ABRScale}"` : null},
        generatedCode: "${born.generatedCode}",
        createdAt: "${born.createdAt}",
        updatedAt: "${born.updatedAt}"
      },`;
    }).join('\n')}
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('NewBorns', null, {});
     */
  }
};
`;

    // Copy seed content to clipboard
    navigator.clipboard.writeText(seedContent);
    alert('Seed file content copied to clipboard. Paste it into a file to create the seed file.');
  };

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />

        <div className="relative md:pt-32 pb-32 pt-10"> 
      </div>


      <div className="px-4 md:px-10 mx-auto w-full m-2 ">

      <p>Export data:</p>
        <div className="text-3xl">
          
          <button className="p-2" onClick={exportToJSON}><Icon icon="bi:filetype-json" /></button>
          <button className="p-2" onClick={exportToExcel}><Icon icon="vscode-icons:file-type-excel" /></button>
          <button className="p-2" onClick={generateSeedFile}><Icon icon="emojione:seedling" /></button>
        </div>
     
          
      <NewbornsChart />
          
      
              
             </div>
             
     
        
       
      </div>
    </>
  );
}
