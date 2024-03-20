import { useState, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


Chart.register(...registerables);

const Dashboard = () => {
  const [bornsData, setBornsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    fetch('https://nbhsbackend.onrender.com/DataCollection/API/newBorns/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include authorization token if required
        'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
      },
    })
      .then(response => response.json())
      .then(data => {
        setBornsData(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='mx-auto '>
        <div className='flex flex-wrap mb-24 '>

        <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
         <div className="animate-pulse flex flex-col space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  </div>

  <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
         <div className="animate-pulse flex flex-col space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  </div>
  <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
         <div className="animate-pulse flex flex-col space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  </div>
  <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
         <div className="animate-pulse flex flex-col space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  </div>

  </div>

  
         <div className="animate-pulse flex flex-col  space-x-4">
    
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
  
         
    </div>;
  }

  // Processing data to count births for each date
  const birthsByDate = bornsData.reduce((acc, born) => {
    const date = born.createdAt.split('T')[0]; // Extracting date part only
    acc[date] = acc[date] ? acc[date] + 1 : 1;
    return acc;
  }, {});

  // Counting births based on OAEResult
  const referCount = bornsData.filter(born => born.OAEResult === 'Refer').length;
  const passCount = bornsData.filter(born => born.OAEResult === 'Pass').length;

  // Chart data for births by OAEResult
  const oaerResultChartData = {
    labels: ['Refer', 'Pass'],
    datasets: [
      {
        label: 'OAEResult Distribution',
        data: [referCount, passCount],
        backgroundColor: ['#173561', 'rgb(75, 192, 192)'],
        hoverBackgroundColor: ['#173561', 'rgb(75, 192, 192)'],
      },
    ],
  };

  // Counting births based on OAEResult for each date
  const birthsByOaeResult = bornsData.reduce((acc, born) => {
    const date = born.createdAt.split('T')[0];
    acc[date] = acc[date] || { Refer: 0, Pass: 0 };
    acc[date][born.OAEResult]++;
    return acc;
  }, {});

  const dates = Object.keys(birthsByOaeResult);
  const referData = dates.map(date => birthsByOaeResult[date].Refer);
  const passData = dates.map(date => birthsByOaeResult[date].Pass);

  const barChartData = {
    labels: dates,
    datasets: [
      {
        label: 'Refer',
        backgroundColor: 'rgb(75, 192, 192)',
        data: referData,
      },
      {
        label: 'Pass',
        backgroundColor: '#173561',
        data: passData,
      },
    ],
  };

  const lineChartData = {
    labels: Object.keys(birthsByDate),
    datasets: [
      {
        label: 'Number of births created',
        data: Object.values(birthsByDate),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        color: '#173561',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartStyle = {
    width: '250px', // Adjust the width as needed
    height: '250px', // Adjust the height as needed
  };
   

  const totalNewborns = bornsData.length;
  

  return (

    <div>
       <div className='flex flex-wrap border border-primary'>
    <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="icon-park-outline:baby" />
                    </div>
                    <h6 className="text-sm  font-semibold">Total of registed new borns</h6>
                    <p className="mt-2 mb-4 text-4xl ">
                     {totalNewborns}</p>
                    <p className="underline text-base mt-5">
                      <Link title="Meet our doctors" className=""  >
                      View new borns
                       </Link>
                    </p>

                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="lucide:baby" />
                    </div>
                    <h6 className="text-sm  font-semibold">Total Number of OAEResult Refered</h6>
                    <p className="mt-2 mb-4 text-4xl ">{referCount}</p>
                    <p className="underline text-base mt-5">
                      <Link title="Meet our doctors" className=""  to="" >
                      View borns
                       </Link>
                    </p>

                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center ">
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white hover:bg-primary text-primary relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="border hover:border-white text-5xl border-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
                    <Icon icon="ph:baby-bold" />
                    </div>
                    <h6 className="text-sm  font-semibold">Total Number of OAEResult Passes</h6>
                    <p className="mt-2 mb-4 text-4xl ">{passCount} </p>
                    <p className="underline text-base mt-5">
                      <Link title="Meet our doctors" className=""  to="/student/application" >
                      View borns
                       </Link>
                    </p>

                  </div>
                </div>
              </div>


              </div> 
    <div className=" bg-white text-primary p-10 mt-5 flex flex-wrap border border-primary">
      
      <div className="p-4 mb-8  pt-6 w-full md:w-4/12 px-4 text-center">
        <h2 className="text-sm  font-semibold">Number of Births Created by Date</h2>
        <Line data={lineChartData} options={options} />
      </div>
      <div className=" p-4  mb-8 pt-6 w-full md:w-4/12 px-4 text-center"  style={pieChartStyle}>
        <h2 className="text-sm  font-semibold">OAEResult Distribution</h2>
        <Pie className='h-2' data={oaerResultChartData}  />
      </div>
      <div className=" p-4  mb-8 pt-6 w-full md:w-4/12 px-4 text-center">
        <h2 className="text-sm  font-semibold">Refer vs Pass Births by Date</h2>
        <Bar data={barChartData} />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
