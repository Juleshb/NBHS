import { useState } from 'react';
import Step1 from '../uploddocs/step1';
import Step2 from '../uploddocs/step2';
import Step3 from '../uploddocs/step3';

const DocumentUploader = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [documents, setDocuments] = useState({
    document1: null,
    document2: null,
    document3: null,
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleDocumentUpload = (step, document) => {
    // Replace this with your actual document validation logic
    const documentIsValid = validateDocument(document);

    if (documentIsValid) {
      setDocuments({ ...documents, [step]: document });
      nextStep();
    } else {
      // Handle invalid document (display an error message, prevent navigation, etc.)
    }
  };

  // Placeholder for document validation logic (replace with your actual validation)
  const validateDocument = (document) => {
    // Replace with your validation criteria (e.g., check file type, size, etc.)
    // Example: Check if the document is not null
    return document !== null;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleDocumentUpload} />;
      case 2:
        return <Step2 onNext={handleDocumentUpload} />;
      case 3:
        return <Step3 onNext={handleDocumentUpload} />;
      // Add more cases for additional steps
      default:
        return null;
    }
  };

  return (
    <div className=" flex mt-8 w-full content-center items-center justify-center ">
      
      <div className="items-center flex flex-wrap mt-4">
        {currentStep > 1 && (
          <button onClick={prevStep} className="px-4 mr-40 py-2 bg-primary  text-white rounded">
            Back
          </button>
        )}
        {renderStep()}
        {currentStep < 3 && (
          <button
            onClick={() => handleDocumentUpload(currentStep, documents[`document${currentStep}`])}
            className="px-4 hidden py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DocumentUploader;
