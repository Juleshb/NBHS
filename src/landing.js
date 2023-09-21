import Navbar from "./components/Nav/landingNav";
import { Icon } from "@iconify/react";
import backgroundImage from "./assets/background.jpg"
import Studentsform from "./components/Metron/Studentform";

const LandingPage = () => {

    const documentList = [
        {
          title: "Application letter addressed to the Director General of the hospital",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "Copy of Passport/National ID",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "Recommendation letter signed by the Dean/Leadership of University/Institution",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "The copy of the Student’s University enrollment card",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "The valid certificate of registration",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "The valid criminal history record screening certificate",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "The valid medical certificate",
          description: "This is a certificate from a doctor confirming the state of someone's health. Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "The valid vaccination certificate for hepatitis B",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "Proof of negative test of Covid 19",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "Proof of negative test of Covid 19 taken within 72 hours prior to the starting date",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "The payment slip for the placement fee",
          description: "An administrative fee of $150 per month shall be paid after final approval of the application to foreigners and 40000RWF per month to the Rwandans, East African community, and DR Students, on the hospital account No 1000001364 from National Bank of Rwanda (BNR). Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "Personal health insurance coverage during the study period",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "Clear goals for experiences and Objectives of placement (why and what do you want to study here)",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
        {
          title: "CV",
          description: "Must be PDF of file type and not more than 2MB of file size.",
        },
      ];


      const generalItems = [
        "Clinical coat or scrub uniform",
        "Stethoscope",
        "Reflex hammers",
        "Examination torch",
        "Measuring tapes",
        "Goniometer",
        "Notebook for taking notes",
        "A hand sanitizer (Alcohol gel) and lotions as necessary",
      ];
    
      const nursingItems = [
        "An otoscope",
        "A Digital Thermometer",
        "A portable sphygmomanometer",
        "An Oxygen Saturometer",
        "A Stopwatch",
        "Other items as may be necessary according to the discipline and or the specific placement",
      ];

  return (
<>
    <Navbar transparent/>
    <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-85">
          <div
            className="absolute top-10 w-full h-full bg-center bg-cover"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                    <br></br>
                    <br></br>
                  <h1 className="text-white font-semibold text-3xl">
                  Apply for Clinical Placement
                  </h1>
                  <p className="text-xl tracking-wider text-white p-6 font-light">To apply for internship there is same required Document you must fill before. Please Read all carefully before applying.</p>
                  <h1 className="text-white font-semibold mb-0 text-2xl underline underline-offset-8">
                 
                  </h1>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
                <div className="hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="mdi:register-outline" />
                    </div>
                    <h6 className="text-base  font-semibold">Step 1: Register before login</h6>
                    <p className="mt-2 mb-4 ">
                    Go to the link Application, Complete all Information After Finding your Information you will recive comfrimation Email.
                    </p>
                    <p className="underline text-base mt-5">
                      <a href="/1/clinical/doctors" title="Meet our doctors" className="">
                        Register now
                       </a>
                    </p>

                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white border border-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                    <Icon icon="tabler:login-2" />
                    </div>
                    <h6 className="text-base  font-semibold">Step 2: Login by using E-mail ID</h6>
                    <p className="mt-2 mb-4 ">
                    Please login with your E-mail ID, and password that you either created when you completed the application or that you have been given.
                    </p>
                    <p className="underline text-base mt-5">
                      <a href="/1/clinical/doctors" title="Meet our doctors" className="">
                        Login
                       </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div className=" border border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="mdi:help-outline" />
                    </div>
                    <h6 className="text-base  font-semibold">Step 3</h6>
                    <p className="mt-2 mb-4 ">
                    After login system will Guide you step by step
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mb-0 mt-32 justify-center text-center ">
              <div className="w-full lg:w-6/12 ">
                <h2 className="text-xl font-semibold text-primary">Clinical Placement Requirement at CHUB</h2>
              </div>
            </div>
            
            <div className="flex flex-wrap mt-10 ">
              <div className="w-full md:w-5/12 px-4 mb-5 mr-auto ml-auto  shadow-lg rounded-lg">
                <div className="flex flex-wrap  ">
                <div className="text-primary mr-2 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <Icon icon="pajamas:requirements" />
                </div>
                <h3 className="text-base text-primary mb-2 font-semibold  leading-normal">
                <br></br>
                ADMINISTRATIVE REQUIREMENTS
                </h3>
                </div>
                <ul className="list-decimal ml-6">
          {documentList.map((document, index) => (
            <li key={index} className="text-lg mb-2">
              <span className="mt-4 mb-2  ">{document.title}</span>
              <br />
              <span className="mt-4 mb-2 text-primary ">{document.description}</span>
              
            </li>
          ))}
        </ul>
               
              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto shadow-lg rounded-lg">
              <div className="flex flex-wrap   ">
                <div className="text-primary mr-2 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <Icon icon="clarity:first-aid-kit-line" />
                </div>
                <h3 className="text-base mb-2 text-primary font-semibold  leading-normal"><br></br>
                THE STUDENT’S PRACTICAL KIT
                </h3>
                </div>
                <p className="mb-2">A. General Items:</p>
        <ul className="list-disc ml-6">
          {generalItems.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
        
        <p className="mt-4 mb-2">B. Specific for Nursing Students:</p>
        <ul className="list-disc ml-6">
          {nursingItems.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>

        <p className="mt-4">Notice: The high learning institution is requested to bring materials according to the hospital policy.</p>
               
               
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
         
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap ">
              
              <div className="w-full md:w-5/12 text-white bg-primary ml-auto mr-auto px-4 border border-primary shadow-lg rounded-lg p-5">
                <div className="md:pr-12">
                  <div className="border border-white text-5xl p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full">
                  <Icon icon="ic:outline-local-police" />
                  </div>
                  
                  <p className="mt-4 text-lg leading-relaxed">
                  Admission requirements: refer to the policy no 354/2016 on clinical placement:
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

      
        <section className="relative mt-20 block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                  <div className="flex-auto p-5 lg:p-10">

                    <Studentsform/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
