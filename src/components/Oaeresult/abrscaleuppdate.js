import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Viewsingle from '../Screaning/updateborn';

function BornUpdateForm() {
    const { userId } = useParams();
    const [ABRScale, setABRScale] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [newBorns, setNewBorns] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetchNewBorns();
    }, []);

    const fetchNewBorns = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            const response = await fetch(`https://nbhs136.onrender.com/DataCollection/API/newBorns/getSingle/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            
            const data = await response.json();
            const singleBornData = data.data; // Assuming the API response contains a single object
            
            // Set the single object into an array to maintain consistency
            setNewBorns([singleBornData]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching new borns:', error);
            setError(error.message || 'Failed to fetch data');
            setLoading(false);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authToken = localStorage.getItem('authToken');

        try {
            const response = await fetch(`https://nbhs136.onrender.com/DataCollection/API/newBorns/updateRefer/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ ABRScale })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to update born with OAE Result of Refer');
            }

            setSuccess(data.message);
            setError('');
        } catch (error) {
            console.error('Error updating born:', error);
            setError(error.message || 'Failed to update born with OAE Result of Refer');
            setSuccess('');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
<>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 mb-8 p-2">
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">New Borns with Refer OAE Result</h1>
        <div className="p-2">
            {newBorns.map((newBorn) => (
                <div key={newBorn.id} className="border border-gray-300 p-4  rounded-md">
                     <p><span className="font-semibold">Mother&apos;s Name:</span> {newBorn.motherName}</p>
                                    <p><span className="font-semibold">Father&apos;s Name:</span> {newBorn.fatherName}</p>
                                    <p><span className="font-semibold">Marital Status:</span> {newBorn.maritalStatus}</p>
                                    <p><span className="font-semibold">Phone Contact:</span> {newBorn.phoneContact}</p>
                                    <p><span className="font-semibold">Province:</span> {newBorn.province}</p>
                                    <p><span className="font-semibold">District:</span> {newBorn.district}</p>
                                    <p><span className="font-semibold">Date of Birth:</span> {newBorn.dateOfBirth}</p>
                                    <p><span className="font-semibold">Age of Newborn:</span> {newBorn.ageOfNewborn}</p>
                                    <p><span className="font-semibold">Sex:</span> {newBorn.sex}</p>
                                    <p><span className="font-semibold">Mode of Delivery:</span> {newBorn.modeOfDelivery}</p>
                                    <p><span className="font-semibold">APGAR Score at Birth:</span> {newBorn.APGARSCOREAtBirth}</p>
                                    <p><span className="font-semibold">Weight at Birth:</span> {newBorn.weightAtBirth}</p>
                                    <p><span className="font-semibold">Neonatal Infection Risk:</span> {newBorn.neonatalInfectionRisk}</p>
                                    <p><span className="font-semibold">Maternal Severe Disease:</span> {newBorn.maternalSevereDisease}</p>
                                    <p><span className="font-semibold">History of Maternal Alcohol Use and Smoking:</span> {newBorn.historyOfMaternalAlcoholUseAndSmoking}</p>
                                    <p><span className="font-semibold">Maternal Exposure to Ototoxic Drugs:</span> {newBorn.maternalExplosureToOtotoxicDrugs}</p>
                                    <p><span className="font-semibold">Newborn&apos;s Position in the Family:</span> {newBorn.newbornPositionInTheFamily}</p>
                                    <p><span className="font-semibold">Presence of Ear Dysmorphism:</span> {newBorn.presenceOfEarDysmorphism}</p>
                                    <p><span className="font-semibold">History of Hearing Loss Among Family Members:</span> {newBorn.historyOfHearingLossAmongFamilyMembers}</p>
                                    <p><span className="font-semibold">OAE Result:</span> {newBorn.OAEResult}</p>
                                    <p className='bg-primary text-white'><span className="font-semibold">ABRScale:</span> {newBorn.ABRScale}</p>
                                    <p><span className="font-semibold">Generated Code:</span> {newBorn.generatedCode}</p>
                                    <p><span className="font-semibold">Created At:</span> {newBorn.createdAt}</p>
                                    <p><span className="font-semibold">Updated At:</span> {newBorn.updatedAt}</p>
                </div>
            ))}
        </div>
    </div>

    <div className="mb-4 p-2">
        <label htmlFor="ABRScale" className="block text-gray-700">ABR Scale:</label>
        <input
            type="text"
            id="ABRScale"
            value={ABRScale}
            onChange={(e) => setABRScale(e.target.value)}
            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full"
            required
        />
    </div>
    {error && <div className="text-red-500">{error}</div>}
    {success && <div className="text-green-500">{success}</div>}
    <button type="submit" className="mt-4 px-4 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 items-center flex">Save</button>
</form>

<Viewsingle />

</>




        
  );
}

export default BornUpdateForm;
