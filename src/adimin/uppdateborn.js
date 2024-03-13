import { Icon } from '@iconify/react';
import Navbar from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Viewsinglebon = () => {
    const { userId } = useParams();
  const [formValues, setformValues] = useState({
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


  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    fetch(`http://localhost:4600/DataCollection/API/newBorns/getSingle/${userId}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
      
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Received user data:', responseData);
        
        const newData = responseData.data;

        setformValues({
            mothername: newData.motherName,
            fathername: newData.fatherName,
            maritalStatus: newData.maritalStatus,
            phonecontact: newData.phoneContact,
            province: newData.province,
            district: newData.district,
            dateOfBirth: newData.dateOfBirth,
            ageOfNewborn: newData.ageOfNewborn,
            sex: newData.sex,
            modeOfDelivery: newData.modeOfDelivery,
            APGARSCOREAtBirth: newData.APGARSCOREAtBirth,
            weightAtBirth: newData.weightAtBirth,
            neonatalInfectionRisk: newData.neonatalInfectionRisk,
            maternalSevereDisease: newData.maternalSevereDisease,
            historyOfMaternalAlcoholUseAndSmoking: newData.historyOfMaternalAlcoholUseAndSmoking,
            maternalExplosureToOtotoxicDrugs: newData.maternalExplosureToOtotoxicDrugs,
            newbornPositionInTheFamily: newData.newbornPositionInTheFamily,
            presenceOfEarDysmorphism: newData.presenceOfEarDysmorphism,
            historyOfHearingLossAmongFamilyMembers: newData.historyOfHearingLossAmongFamilyMembers,
            OAEResult: newData.OAEResult, // Assuming pin exists in userData
          });
        setDataLoaded(true); // Set dataLoaded to true once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);
  
  // Add a console log to check formValues state
  useEffect(() => {
    console.log('formValues:', formValues);
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({
      ...formValues,
      [name]: value
    });
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [SuccessMessage, setSuccessMessage] = useState('');

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

      const response = await fetch(`http://localhost:4600/DataCollection/API/newBorns/update/${userId}`, {
        method: 'PUT',
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
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />

        <div className="relative md:pt-32 pb-32 pt-10"> 
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6  border border-primary">
      <div className="items-center flex flex-wrap justify-center bg-primary text-white w-full h-auto space-x-4 ">

<button
  className="px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block 'bg-white text-primary "
>
    <i className='mr-2'><Icon icon="mingcute:user-info-fill" /></i>
    Born info
</button>


</div>
 <section className="relative mt-20 pt-20 block py-24 lg:pt-0 bg-blueGray-800" id="register">

 <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                  <div className="flex-auto p-5 lg:p-10">
                    
        <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Born Detail:</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {dataLoaded ? (



  
<form id="registrationForm" onSubmit={handleSubmit}>

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="mothername" className="block text-sm font-medium text-gray-700">Mother&apos;s Name</label>
          <input
            type="text"
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="mothername"
            name="mothername"
            placeholder="Mother's Name"
            value={formValues.mothername}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="fathername" className="block text-sm font-medium text-gray-700">Father&apos;s Name</label>
          <input
            type="text"
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="fathername"
            name="fathername"
            placeholder="Father's Name"
            value={formValues.fathername}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status</label>
          <select
            value={formValues.maritalStatus}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="maritalStatus"
            name="maritalStatus"
            required
          >
            <option></option>
            <option>Single</option>
            <option>Maried</option>
            <option>Divorsed</option>
            <option>Perefer not to say</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="phonecontact" className="block text-sm font-medium text-gray-700">Phone Contact</label>
          <input
            type="text"
            value={formValues.phonecontact}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="phonecontact"
            name="phonecontact"
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province</label>
          <select
            value={formValues.province}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="province"
            name="province"
            required
          >
            <option></option>
            <option>Eastern province</option>
            <option>Western province</option>
            <option>Southern province</option>
            <option>Northern province</option>
            <option>Kigali city</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
          <select
            value={formValues.district}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="district"
            name="district"
            required
          >
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
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={formValues.dateOfBirth}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="dateOfBirth"
            name="dateOfBirth"
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="ageOfNewborn" className="block text-sm font-medium text-gray-700">Age of the Newborn</label>
          <input
            type="number"
            value={formValues.ageOfNewborn}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="ageOfNewborn"
            name="ageOfNewborn"
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
          <select
            value={formValues.sex}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="sex"
            name="sex"
            required
          >
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="modeOfDelivery" className="block text-sm font-medium text-gray-700">Mode of Delivery</label>
          <select
            value={formValues.modeOfDelivery}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="modeOfDelivery"
            name="modeOfDelivery"
            required
          >
            <option></option>
            <option>Normal Delivery</option>
            <option>C-Section</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="APGARSCOREAtBirth" className="block text-sm font-medium text-gray-700">APGAR SCORE at Birth at 5th Minute</label>
          <input
            type="number"
            value={formValues.APGARSCOREAtBirth}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="APGARSCOREAtBirth"
            name="APGARSCOREAtBirth"
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="weightAtBirth" className="block text-sm font-medium text-gray-700">Weight at Birth</label>
          <input
            type="number"
            value={formValues.weightAtBirth}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="weightAtBirth"
            name="weightAtBirth"
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="neonatalInfectionRisk" className="block text-sm font-medium text-gray-700">Neonatal Infection Risk</label>
          <select
            value={formValues.neonatalInfectionRisk}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="neonatalInfectionRisk"
            name="neonatalInfectionRisk"
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="maternalSevereDisease" className="block text-sm font-medium text-gray-700">Maternal Severe Disease ex: Meningitis</label>
          <select
            value={formValues.maternalSevereDisease}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="maternalSevereDisease"
            name="maternalSevereDisease"
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="historyOfMaternalAlcoholUseAndSmoking" className="block text-sm font-medium text-gray-700">History of Maternal Alcohol Use and Smoking</label>
          <select
            value={formValues.historyOfMaternalAlcoholUseAndSmoking}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="historyOfMaternalAlcoholUseAndSmoking"
            name="historyOfMaternalAlcoholUseAndSmoking"
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="maternalExplosureToOtotoxicDrugs" className="block text-sm font-medium text-gray-700">Maternal Exposure to Ototoxic Drugs</label>
          <select
            value={formValues.maternalExplosureToOtotoxicDrugs}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="maternalExplosureToOtotoxicDrugs"
            name="maternalExplosureToOtotoxicDrugs"
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="newbornPositionInTheFamily" className="block text-sm font-medium text-gray-700">Newborn&apos;s Position in the Family</label>
          <select
            value={formValues.newbornPositionInTheFamily}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="newbornPositionInTheFamily"
            name="newbornPositionInTheFamily"
            required
          >
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
          <label htmlFor="presenceOfEarDysmorphism" className="block text-sm font-medium text-gray-700">Presence of Ear Dysmorphism</label>
          <select
            value={formValues.presenceOfEarDysmorphism}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="presenceOfEarDysmorphism"
            name="presenceOfEarDysmorphism"
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="historyOfHearingLossAmongFamilyMembers" className="block text-sm font-medium text-gray-700">History of Hearing Loss Among Family Members</label>
          <select
            value={formValues.historyOfHearingLossAmongFamilyMembers}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="historyOfHearingLossAmongFamilyMembers"
            name="historyOfHearingLossAmongFamilyMembers"
            required
          >
            <option></option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="OAEResult" className="block text-sm font-medium text-gray-700">OAE Result</label>
          <select
            value={formValues.OAEResult}
            onChange={handleChange}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            id="OAEResult"
            name="OAEResult"
            required
          >
            <option></option>
            <option>Pass</option>
            <option>Refer</option>
          </select>
        </div>
      </div>
      <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex">
        <i className='mr-2'>Save</i>
      </button>
    </form>
) : (
    <p><i><Icon icon="eos-icons:bubble-loading" /></i>Loading...</p>
  )}
     
        </div>

        </div>
                </div>
              </div>
            </div>
          </div>
          </section>

          </div>
          </div>
        
       
      </div>

</>
    );
}

export default Viewsinglebon;