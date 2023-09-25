import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { Icon } from '@iconify/react';

const Step3 = ({ onNext }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleNext = () => {
    if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
      onNext(1, selectedFile);
    } else {
      alert('Invalid document. Please select a document less than 2MB.');
    }
  };

  return (
    <div className='text-primary'>
      <h6 className="text-sm  font-semibold mb-12">3. Recommendation letter</h6>
      <div className="items-center flex flex-wrap  py-3 block ">
      <input
  type="file"
  className="hidden" 
  id="fileInput"
  onChange={handleFileChange}
/>

<label
  htmlFor="fileInput" 
  className=" cursor-pointer"
>
<div  htmlFor="fileInput" className="border mt-5 mr-5 hover:border-white text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="line-md:uploading-loop" />
                    </div>
</label>




      <button onClick={handleNext} className="px-4 hover:bg-white hover:text-primary border border-primary py-2 bg-primary text-white rounded">Upload</button>
    </div>
    {selectedFile && (
        <p className="mt-2 items-center flex"><Icon icon="bi:file-earmark-pdf" /> {selectedFile.name}</p>
      )}

    </div>
  );
};

Step3.propTypes = {
  onNext: PropTypes.func.isRequired, 
};

export default Step3;
