import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Newborn() {

  const [formValues, setFormValues] = useState({
    mothername: '',
    fathername: '',
    maritalStatus: '',
    phonecontact: '',
    province: '',
    district: '',
    dateOfBirth: '',
    ageOfNewborn: '',
    sex: '',
    modeOfDelivery: '',
    APGARSCOREAtBirth: '',
    weightAtBirth: '',
    neonatalInfectionRisk: '',
    maternalSevereDisease: '',
    historyOfMaternalAlcoholUseAndSmoking: '',
    maternalExplosureToOtotoxicDrugs: '',
    newbornPositionInTheFamily: '',
    presenceOfEarDysmorphism: '',
    historyOfHearingLossAmongFamilyMembers: '',
    OAEResult: '',
    // Add state variables for the rest of the form fields based on the provided form
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [SuccessMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      motherName: formValues.mothername,
      fatherName: formValues.fathername,
      maritalStatus: formValues.maritalStatus,
      phoneContact: formValues.phonecontact,
      province: formValues.province,
      district: formValues.district,
      dateOfBirth: formValues.dateOfBirth,
      ageOfNewborn: formValues.ageOfNewborn,
      sex: formValues.sex,
      modeOfDelivery: formValues.modeOfDelivery,
      APGARSCOREAtBirth: formValues.APGARSCOREAtBirth,
      weightAtBirth: formValues.weightAtBirth,
      neonatalInfectionRisk: formValues.neonatalInfectionRisk,
      maternalSevereDisease: formValues.maternalSevereDisease,
      historyOfMaternalAlcoholUseAndSmoking: formValues.historyOfMaternalAlcoholUseAndSmoking,
      maternalExplosureToOtotoxicDrugs: formValues.maternalExplosureToOtotoxicDrugs,
      newbornPositionInTheFamily: formValues.newbornPositionInTheFamily,
      presenceOfEarDysmorphism: formValues.presenceOfEarDysmorphism,
      historyOfHearingLossAmongFamilyMembers: formValues.historyOfHearingLossAmongFamilyMembers,
      OAEResult: formValues.OAEResult,

      // Add the rest of the form fields here based on the provided API request
    };

    try {
      const authToken = localStorage.getItem('authToken');

      const response = await fetch('http://localhost:4600/DataCollection/API/newBorns/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization token if required
          'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully');
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setSuccessMessage(data.message || 'Health Center Registed!');
        setFormValues({
          mothername: '',
    fathername: '',
    maritalStatus: '',
    phonecontact: '',
    province: '',
    district: '',
    dateOfBirth: '',
    ageOfNewborn: '',
    sex: '',
    modeOfDelivery: '',
    APGARSCOREAtBirth: '',
    weightAtBirth: '',
    neonatalInfectionRisk: '',
    maternalSevereDisease: '',
    historyOfMaternalAlcoholUseAndSmoking: '',
    maternalExplosureToOtotoxicDrugs: '',
    newbornPositionInTheFamily: '',
    presenceOfEarDysmorphism: '',
    historyOfHearingLossAmongFamilyMembers: '',
    OAEResult: ''
        });
      } else {
        // Handle error response from API
        console.error('Form submission failed:', response.statusText);
        setShowFailureMessage(true);
        setShowSuccessMessage(false);
        setErrorMessage(data.message || 'Failed to register');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Form submission error:', error);
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
      <div className="rounded-t  mb-0 px-6 py-6">
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
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Newborn Hearing Loss and Genetic Screening in Rwanda</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="mother's name" className="block text-sm font-medium text-gray-700">Mother&apos;s Name</label>
                  <input
        type="text"
        className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
        id="mothername"
        name="mothername"
        placeholder="Mother's Name"
        value={formValues.mothername}
        onChange={handleChange}
        required
      />                </div>
                <div className="col-span-1">
                  <label htmlFor="father's name" className="block text-sm font-medium text-gray-700">Father&apos;s Name</label>
                  <input
        type="text"
        className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
        id="mothername"
        name="fathername"
        placeholder="Father's Name"
        value={formValues.fathername}
        onChange={handleChange}
        required
      /> 
                 </div>
                <div className="col-span-1">
                  <label htmlFor="Marital Status" className="block text-sm font-medium text-gray-700">Marital Status</label>
                  <select 
                   value={formValues.maritalStatus}
                   onChange={handleChange}
                   className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Marital Status" 
                   name="maritalStatus" required>
                    <option></option>
                    <option>Single</option>
                    <option>Maried</option>
                    <option>Divorsed</option>
                    <option>Perefer not to say</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="father's name" className="block text-sm font-medium text-gray-700">Phone Contact</label>
                  <input type="text" 
                   value={formValues.phonecontact}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="phoneconract" 
                  name="phonecontact" required />
                </div>

                <div className="col-span-1">
                  <label htmlFor="Province" className="block text-sm font-medium text-gray-700">Province</label>
                  <select 
                   value={formValues.province}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Province" 
                  name="province" required>
                    <option></option>
                    <option>Eastern province</option>
                    <option>Western province</option>
                    <option>Southern province</option>
                    <option>Northern province</option>
                    <option>Northern province</option>
                    <option>Kigali city</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="District" className="block text-sm font-medium text-gray-700">District</label>
                  <select 
                   value={formValues.district}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="District" 
                  name="district" required>
                    <option></option>
                    <option>Bugesera</option>
                    <option>Burera</option>
                    <option>Gakenke</option>
                    <option>Gasabo</option>
                    <option>Gatsibo</option>
                    <option>Gicumbi</option>
                    <option>Gisagara</option>
                    <option>Huye</option>
                    <option>Kamonyi</option>
                    <option>Karongi</option>
                    <option>Kayonza</option>
                    <option>Kicukiro</option>
                    <option>Kirehe</option>
                    <option>Muhanga</option>
                    <option>Musanze</option>
                    <option>Ngoma</option>
                    <option>Ngororero</option>
                    <option>Nyabihu</option>
                    <option>Nyagatare</option>
                    <option>Nyamagabe</option>
                    <option>Nyamasheke</option>
                    <option>Nyanza</option>
                    <option>Nyarugenge</option>
                    <option>Nyaruguru</option>
                    <option>Rubavu</option>
                    <option>Ruhango</option>
                    <option>Rulindo</option>
                    <option>Rusizi</option>
                    <option>Rutsiro</option>
                    <option>Rwamagana</option>
                  </select>
                </div>
                

                <div className="col-span-1">
                  <label htmlFor="Date of Birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" 
                   value={formValues.dateOfBirth}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Date of Birth" 
                  name="dateOfBirth" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Age of the Newborn" className="block text-sm font-medium text-gray-700">Age of the Newborn</label>
                  <input type="number"
                   value={formValues.ageOfNewborn}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Age of the Newborn" 
                  name="ageOfNewborn" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Sex" className="block text-sm font-medium text-gray-700">Sex</label>
                  <select 
                   value={formValues.sex}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Sex" 
                  name="sex" required>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Mode of Delivery" className="block text-sm font-medium text-gray-700">Mode of Delivery</label>
                  <select 
                   value={formValues.modeOfDelivery}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Mode of Delivery" 
                  name="modeOfDelivery" required>
                    <option></option>
                    <option>Normal Delivery</option>
                    <option>C-Section</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="APGAR SCORE at Birth at 5th Minute" className="block text-sm font-medium text-gray-700">APGAR SCORE at Birth at 5th Minute</label>
                  <input type="number"
                   value={formValues.APGARSCOREAtBirth}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" 
                  name="APGARSCOREAtBirth" required />
                 </div>
                <div className="col-span-1">
                  <label htmlFor="Weight at Birth" className="block text-sm font-medium text-gray-700">Weight at Birth</label>
                  <input type="number"
                   value={formValues.weightAtBirth}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" 
                  name="weightAtBirth" required />
                  </div>
                <div className="col-span-1">
                  <label htmlFor="Neonatal Infection Risk" className="block text-sm font-medium text-gray-700">Neonatal Infection Risk</label>
                  <select 
                   value={formValues.neonatalInfectionRisk}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"  
                  name="neonatalInfectionRisk" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Maternal Severe Disease ex: Miningitis" className="block text-sm font-medium text-gray-700">Maternal Severe Disease ex: Miningitis</label>
                  <select 
                   value={formValues.maternalSevereDisease}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" 
                   name="maternalSevereDisease" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="History of Maternal Alcohol Use and Smoking" className="block text-sm font-medium text-gray-700">History of Maternal Alcohol Use and Smoking</label>
                  <select 
                   value={formValues.historyOfMaternalAlcoholUseAndSmoking}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
                  name="historyOfMaternalAlcoholUseAndSmoking" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Maternal Explosure to Ototoxic Drugs" className="block text-sm font-medium text-gray-700">Maternal Explosure to Ototoxic Drugs</label>
                  <select 
                   value={formValues.maternalExplosureToOtotoxicDrugs}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
                  name="maternalExplosureToOtotoxicDrugs" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Newborn's Position in the Family" className="block text-sm font-medium text-gray-700">Newborn&apos;s Position in the Family</label>
                  <select 
                   value={formValues.newbornPositionInTheFamily}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" 
                  name="newbornPositionInTheFamily" required>
                    <option></option>
                    <option>First born</option>
                    <option>Second born</option>
                    <option>Third born</option>
                    <option>Fourth born</option>
                    <option>Fifth born</option>
                    <option>Sixth born</option>
                    <option>Seventh born</option>
                    <option>More than seventh born</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Presence of Ear Dysmorphism" className="block text-sm font-medium text-gray-700">Presence of Ear Dysmorphism</label>
                  <select 
                   value={formValues.presenceOfEarDysmorphism}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" 
                  name="presenceOfEarDysmorphism" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="History of Hearing Loss Among Family Members" className="block text-sm font-medium text-gray-700">History of Hearing Loss Among Family Members</label>
                  <select 
                   value={formValues.historyOfHearingLossAmongFamilyMembers}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
                  name="historyOfHearingLossAmongFamilyMembers" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="OAE Result" className="block text-sm font-medium text-gray-700">OAE Result</label>
                  <select 
                   value={formValues.ABRScale}
                   onChange={handleChange}
                  className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" 
                  name="OAEResult" required>
                    <option></option>
                    <option>Pass</option>
                    <option>Refer</option>
                  </select>
                </div>
                
                
                

          
              </div>
              <button type="submit" className="mt-4 px-4 py-3 bg-white text-primary rounded-lg hover:bg-primary hover:text-white border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Save As Draft</button>

              <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex"><i className='mr-2'><Icon icon="dashicons:saved" /></i>Submit</button>
            </form>
        </div>
      </>
    )}