import { useState, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const Dashboard = () => {
  const [bornsData, setBornsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    fetch('https://nbhsbackend.onrender.com/DataCollection/API/newBorns/getAllborns', {
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
    return <div>Loading...</div>;
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
    width: '100px', // Adjust the width as needed
    height: '100px', // Adjust the height as needed
  };
   

  return (
    <div className=" bg-white text-primary p-10 mt-5 flex flex-wrap border border-primary">
      
      <div className="p-4 mb-8  pt-6 w-full md:w-4/12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-3">Number of Births Created by Date</h2>
        <Line data={lineChartData} options={options} />
      </div>
      <div className=" p-4  mb-8 pt-6 w-full md:w-4/12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-3">OAEResult Distribution</h2>
        <Pie className='h-2' data={oaerResultChartData}  style={pieChartStyle} />
      </div>
      <div className=" p-4  mb-8 pt-6 w-full md:w-4/12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-3">Refer vs Pass Births by Date</h2>
        <Bar data={barChartData} />
      </div>
    </div>
  );
};

export default Dashboard;
