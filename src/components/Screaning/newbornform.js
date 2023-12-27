import { Icon } from '@iconify/react';
export default function Newborn() {
    return (
      <>
      <div className="rounded-t  mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-lg font-bold text-primary">Newborn Hearing Loss and Genetic Screening in Rwanda</h4>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form id="registrationForm" action="" method="POST">
              <input type="hidden" name="action" value="register"/>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="mother's name" className="block text-sm font-medium text-gray-700">Mother&apos;s Name</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="mothername" name="mothername" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="father's name" className="block text-sm font-medium text-gray-700">Father&apos;s Name</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="fathername" name="fathername" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Marital Status" className="block text-sm font-medium text-gray-700">Marital Status</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Marital Status" name="Marital Status" required>
                    <option></option>
                    <option>Single</option>
                    <option>Maried</option>
                    <option>Divorsed</option>
                    <option>Perefer not to say</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="father's name" className="block text-sm font-medium text-gray-700">Phone Contact</label>
                  <input type="text" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="phoneconract" name="phone contact" required />
                </div>

                <div className="col-span-1">
                  <label htmlFor="Province" className="block text-sm font-medium text-gray-700">Province</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Province" name="Province" required>
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
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="District" name="District" required>
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
                  <label htmlFor="Province" className="block text-sm font-medium text-gray-700">Hospital of origin</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Province" name="Province" required>
                    <option></option>
                    <option>Rwanda Military Hospital</option>
                    <option>King Faisal Hospital</option>
                    <option>Kabgayi Teaching Hospital</option>
                    <option>Ruhengeri Referral Hospital</option>
                    <option>Masaka DH</option>
                    <option>Kabutare DH</option>
                    <option>Muhima DH</option>
                    <option>Rwamagana DH</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label htmlFor="Date of Birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Date of Birth" name="Date of Birth" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Age of the Newborn" className="block text-sm font-medium text-gray-700">Age of the Newborn</label>
                  <input type="number" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Age of the Newborn" name="Age of the Newborn" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Sex" className="block text-sm font-medium text-gray-700">Sex</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Sex" name="Sex" required>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Mode of Delivery" className="block text-sm font-medium text-gray-700">Mode of Delivery</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Mode of Delivery" name="Mode of Delivery" required>
                    <option></option>
                    <option>Normal Delivery</option>
                    <option>C-Section</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="APGAR SCORE at Birth at 5th Minute" className="block text-sm font-medium text-gray-700">APGAR SCORE at Birth at 5th Minute</label>
                  <input type="number" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="APGAR SCORE at Birth at 5th Minute" name="APGAR SCORE at Birth at 5th Minute" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Weight at Birth" className="block text-sm font-medium text-gray-700">Weight at Birth</label>
                  <input type="number" className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Weight at Birth" name="Weight at Birth" required />
                </div>
                <div className="col-span-1">
                  <label htmlFor="Neonatal Infection Risk" className="block text-sm font-medium text-gray-700">Neonatal Infection Risk</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Neonatal Infection Risk" name="Neonatal Infection Risk" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Maternal Severe Disease ex: Miningitis" className="block text-sm font-medium text-gray-700">Maternal Severe Disease ex: Miningitis</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Maternal Severe Disease" name="Maternal Severe Disease" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="History of Maternal Alcohol Use and Smoking" className="block text-sm font-medium text-gray-700">History of Maternal Alcohol Use and Smoking</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="History of Maternal Alcohol Use and Smoking" name="History of Maternal Alcohol Use and Smoking" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Maternal Explosure to Ototoxic Drugs" className="block text-sm font-medium text-gray-700">Maternal Explosure to Ototoxic Drugs</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Maternal Explosure to Ototoxic Drugs" name="Maternal Explosure to Ototoxic Drugs" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="Newborn's Position in the Family" className="block text-sm font-medium text-gray-700">Newborn&apos;s Position in the Family</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Newborn's Position in the Family" name="Newborn's Position in the Family" required>
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
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="Presence of Ear Dysmorphism" name="Presence of Ear Dysmorphism" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="History of Hearing Loss Among Family Members" className="block text-sm font-medium text-gray-700">History of Hearing Loss Among Family Members</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="History of Hearing Loss Among Family Members" name="Presence of Ear Dysmorphism" required>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="OAE Result" className="block text-sm font-medium text-gray-700">OAE Result</label>
                  <select className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" id="OAE Result" name="OAE Result" required>
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